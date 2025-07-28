import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

export const useExport = () => {
  const exportToPDF = async (elementId: string, filename: string = "dashboard-export") => {
    try {
      const element = document.getElementById(elementId)
      if (!element) throw new Error("Element not found")

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("l", "mm", "a4")
      
      const imgWidth = 297 // A4 landscape width
      const pageHeight = 210 // A4 landscape height
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`${filename}.pdf`)
    } catch (error) {
      console.error("Error exporting to PDF:", error)
    }
  }

  const exportToCSV = (data: any[], filename: string = "dashboard-data") => {
    try {
      const headers = Object.keys(data[0] || {})
      const csvContent = [
        headers.join(","),
        ...data.map(row => 
          headers.map(header => 
            typeof row[header] === "string" ? `"${row[header]}"` : row[header]
          ).join(",")
        )
      ].join("\n")

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const link = document.createElement("a")
      
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob)
        link.setAttribute("href", url)
        link.setAttribute("download", `${filename}.csv`)
        link.style.visibility = "hidden"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error("Error exporting to CSV:", error)
    }
  }

  return { exportToPDF, exportToCSV }
}