import { useState, useEffect } from "react"

interface ApiDataPoint {
  name: string
  value: number
  date?: string
}

interface UseApiDataReturn {
  data: ApiDataPoint[]
  loading: boolean
  error: string | null
  refresh: () => void
}

// Simulate real-time data from a public API
export const useApiData = (endpoint: string, interval: number = 30000): UseApiDataReturn => {
  const [data, setData] = useState<ApiDataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const generateMockData = (): ApiDataPoint[] => {
    const baseData = [
      { name: "Jan", value: Math.floor(Math.random() * 5000) + 2000 },
      { name: "Feb", value: Math.floor(Math.random() * 5000) + 2500 },
      { name: "Mar", value: Math.floor(Math.random() * 5000) + 3000 },
      { name: "Apr", value: Math.floor(Math.random() * 5000) + 3500 },
      { name: "May", value: Math.floor(Math.random() * 5000) + 4000 },
      { name: "Jun", value: Math.floor(Math.random() * 5000) + 4500 },
    ]
    
    // Add random variation to simulate real-time updates
    return baseData.map(item => ({
      ...item,
      value: item.value + Math.floor(Math.random() * 500) - 250,
      date: new Date().toISOString()
    }))
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would fetch from an actual API:
      // const response = await fetch(endpoint)
      // const result = await response.json()
      
      const mockData = generateMockData()
      setData(mockData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch data")
    } finally {
      setLoading(false)
    }
  }

  const refresh = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData()
    
    // Set up interval for real-time updates
    const intervalId = setInterval(fetchData, interval)
    
    return () => clearInterval(intervalId)
  }, [endpoint, interval])

  return { data, loading, error, refresh }
}

// Hook for metrics data
export const useMetricsData = () => {
  const [metrics, setMetrics] = useState({
    revenue: { value: "$124,592", change: "+12.5%", trend: "up" as const },
    users: { value: "23,456", change: "+8.2%", trend: "up" as const },
    conversions: { value: "892", change: "-2.1%", trend: "down" as const },
    growth: { value: "23.8%", change: "+4.1%", trend: "up" as const }
  })

  const updateMetrics = () => {
    setMetrics(prev => ({
      revenue: {
        ...prev.revenue,
        value: `$${(Math.random() * 50000 + 100000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
      },
      users: {
        ...prev.users,
        value: (Math.random() * 10000 + 20000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      },
      conversions: {
        ...prev.conversions,
        value: (Math.random() * 500 + 800).toFixed(0)
      },
      growth: {
        ...prev.growth,
        value: `${(Math.random() * 10 + 20).toFixed(1)}%`
      }
    }))
  }

  useEffect(() => {
    const interval = setInterval(updateMetrics, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return { metrics, updateMetrics }
}