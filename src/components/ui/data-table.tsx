import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  channel: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  status: 'active' | 'paused' | 'completed';
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale Campaign',
    channel: 'Google Ads',
    budget: 5000,
    spent: 3247,
    impressions: 125430,
    clicks: 2341,
    conversions: 187,
    status: 'active'
  },
  {
    id: '2',
    name: 'Brand Awareness Q4',
    channel: 'Facebook Ads',
    budget: 3500,
    spent: 3500,
    impressions: 89234,
    clicks: 1876,
    conversions: 143,
    status: 'completed'
  },
  {
    id: '3',
    name: 'Email Newsletter',
    channel: 'Email Marketing',
    budget: 800,
    spent: 654,
    impressions: 45620,
    clicks: 1234,
    conversions: 98,
    status: 'active'
  },
  {
    id: '4',
    name: 'LinkedIn B2B Campaign',
    channel: 'LinkedIn Ads',
    budget: 2200,
    spent: 1876,
    impressions: 34521,
    clicks: 876,
    conversions: 67,
    status: 'active'
  },
  {
    id: '5',
    name: 'Retargeting Campaign',
    channel: 'Display Network',
    budget: 1500,
    spent: 1200,
    impressions: 56789,
    clicks: 1987,
    conversions: 234,
    status: 'paused'
  }
];

type SortKey = keyof Campaign;
type SortOrder = 'asc' | 'desc';

export const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const filteredAndSortedCampaigns = campaigns
    .filter(campaign => 
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.channel.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortKey];
      let bValue = b[sortKey];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

  const getStatusColor = (status: Campaign['status']) => {
    switch (status) {
      case 'active':
        return 'bg-accent-success/10 text-accent-success border-accent-success/20';
      case 'paused':
        return 'bg-accent-warning/10 text-accent-warning border-accent-warning/20';
      case 'completed':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) {
      return <ArrowUpDown className="h-4 w-4" />;
    }
    return sortOrder === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('name')} className="h-auto p-0 font-semibold">
                  Campaign Name
                  <SortIcon column="name" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('channel')} className="h-auto p-0 font-semibold">
                  Channel
                  <SortIcon column="channel" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" onClick={() => handleSort('budget')} className="h-auto p-0 font-semibold">
                  Budget
                  <SortIcon column="budget" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" onClick={() => handleSort('spent')} className="h-auto p-0 font-semibold">
                  Spent
                  <SortIcon column="spent" />
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button variant="ghost" onClick={() => handleSort('conversions')} className="h-auto p-0 font-semibold">
                  Conversions
                  <SortIcon column="conversions" />
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedCampaigns.map((campaign) => (
              <TableRow key={campaign.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.channel}</TableCell>
                <TableCell className="text-right">${campaign.budget.toLocaleString()}</TableCell>
                <TableCell className="text-right">${campaign.spent.toLocaleString()}</TableCell>
                <TableCell className="text-right">{campaign.conversions}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-muted-foreground">
        Showing {filteredAndSortedCampaigns.length} of {campaigns.length} campaigns
      </div>
    </div>
  );
};