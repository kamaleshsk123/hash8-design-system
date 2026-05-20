import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import {
    LayoutDashboard,
    Recycle,
    BarChart3,
    FolderKanban,
    Users,
    Database,
    FileText,
    FileType,
    MoreHorizontal,
    Settings,
    HelpCircle,
    Search,
    ChevronDown,
    TrendingUp,
    TrendingDown,
    Plus,
    GripVertical,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Columns3,
    CirclePlus,
} from "lucide-react";

// ---------- CHART DATA ----------
type TimeRange = "Last 7 days" | "Last 30 days" | "Last 3 months";

const chartDataByRange: Record<TimeRange, { date: string; visitors: number }[]> = {
    "Last 7 days": [
        { date: "Jun 24", visitors: 186 },
        { date: "Jun 25", visitors: 305 },
        { date: "Jun 26", visitors: 237 },
        { date: "Jun 27", visitors: 273 },
        { date: "Jun 28", visitors: 209 },
        { date: "Jun 29", visitors: 314 },
        { date: "Jun 30", visitors: 250 },
    ],
    "Last 30 days": [
        { date: "Jun 1", visitors: 120 },
        { date: "Jun 5", visitors: 198 },
        { date: "Jun 9", visitors: 340 },
        { date: "Jun 13", visitors: 280 },
        { date: "Jun 17", visitors: 420 },
        { date: "Jun 21", visitors: 380 },
        { date: "Jun 25", visitors: 305 },
        { date: "Jun 30", visitors: 250 },
    ],
    "Last 3 months": [
        { date: "Apr", visitors: 1420 },
        { date: "May", visitors: 1680 },
        { date: "Jun", visitors: 2150 },
        { date: "Jul", visitors: 1890 },
        { date: "Aug", visitors: 2340 },
        { date: "Sep", visitors: 2780 },
    ],
};

const chartConfig: ChartConfig = {
    visitors: {
        label: "Visitors",
        color: "hsl(var(--primary))",
    },
};

// ---------- TABLE DATA ----------
interface DocumentRow {
    id: number;
    header: string;
    sectionType: string;
    status: "Done" | "In Process";
    target: number;
    limit: number;
    reviewer: string | null;
}

const tableData: DocumentRow[] = [
    { id: 1, header: "Cover page", sectionType: "Cover page", status: "In Process", target: 18, limit: 5, reviewer: "Eddie Lake" },
    { id: 2, header: "Table of contents", sectionType: "Table of contents", status: "Done", target: 29, limit: 24, reviewer: "Eddie Lake" },
    { id: 3, header: "Executive summary", sectionType: "Narrative", status: "Done", target: 10, limit: 13, reviewer: "Eddie Lake" },
    { id: 4, header: "Technical approach", sectionType: "Narrative", status: "Done", target: 27, limit: 23, reviewer: "Jamik Tashpulatov" },
    { id: 5, header: "Design", sectionType: "Narrative", status: "In Process", target: 2, limit: 16, reviewer: "Jamik Tashpulatov" },
    { id: 6, header: "Capabilities", sectionType: "Narrative", status: "In Process", target: 20, limit: 8, reviewer: "Jamik Tashpulatov" },
    { id: 7, header: "Integration with existing systems", sectionType: "Narrative", status: "In Process", target: 19, limit: 21, reviewer: "Jamik Tashpulatov" },
    { id: 8, header: "Innovation and Advantages", sectionType: "Narrative", status: "Done", target: 25, limit: 26, reviewer: null },
    { id: 9, header: "Overview of EMR's Innovative Solutions", sectionType: "Technical content", status: "Done", target: 7, limit: 23, reviewer: null },
    { id: 10, header: "Advanced Algorithms and Machine Learning", sectionType: "Narrative", status: "Done", target: 30, limit: 28, reviewer: null },
];

// ---------- SIDEBAR ITEMS ----------
const homeItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Recycle, label: "Lifecycle", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: FolderKanban, label: "Projects", active: false },
    { icon: Users, label: "Team", active: false },
];

const documentItems = [
    { icon: Database, label: "Data Library" },
    { icon: FileText, label: "Reports" },
    { icon: FileType, label: "Word Assistant" },
];

const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Get Help" },
    { icon: Search, label: "Search" },
];

// ---------- STAT CARDS ----------
const stats = [
    {
        title: "Total Revenue",
        value: "$1,250.00",
        change: "+12.5%",
        trend: "up" as const,
        description: "Trending up this month",
        subtext: "Visitors for the last 6 months",
    },
    {
        title: "New Customers",
        value: "1,234",
        change: "-20%",
        trend: "down" as const,
        description: "Down 20% this period",
        subtext: "Acquisition needs attention",
    },
    {
        title: "Active Accounts",
        value: "45,678",
        change: "+12.5%",
        trend: "up" as const,
        description: "Strong user retention",
        subtext: "Engagement exceed targets",
    },
    {
        title: "Growth Rate",
        value: "4.5%",
        change: "+4.5%",
        trend: "up" as const,
        description: "Steady performance increase",
        subtext: "Meets growth projections",
    },
];

export function DashboardDemo() {
    const [currentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const [activeRange, setActiveRange] = useState<TimeRange>("Last 7 days");
    const totalRows = 68;
    const totalPages = 7;

    return (
        <div className="w-full rounded-lg border bg-background overflow-hidden">
            <div className="flex min-h-[700px]">
                {/* ========== SIDEBAR ========== */}
                <aside className="hidden lg:flex w-[220px] flex-col border-r bg-background">
                    {/* Org Header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-[10px] font-bold">
                            A
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">AssetiQ</p>
                        </div>
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>

                    {/* Home Section */}
                    <div className="flex-1 overflow-y-auto px-2 py-3">
                        <p className="px-2 mb-1 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                            Home
                        </p>
                        <nav className="flex flex-col gap-0.5">
                            {homeItems.map((item) => (
                                <button
                                    key={item.label}
                                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs transition-colors ${item.active
                                        ? "bg-muted font-medium text-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }`}
                                >
                                    <item.icon className="h-3.5 w-3.5" />
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <Separator className="my-3" />

                        <p className="px-2 mb-1 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                            Documents
                        </p>
                        <nav className="flex flex-col gap-0.5">
                            {documentItems.map((item) => (
                                <button
                                    key={item.label}
                                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                >
                                    <item.icon className="h-3.5 w-3.5" />
                                    {item.label}
                                </button>
                            ))}
                            <button className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                                <MoreHorizontal className="h-3.5 w-3.5" />
                                More
                            </button>
                        </nav>
                    </div>

                    {/* Bottom Nav */}
                    <div className="border-t px-2 py-2">
                        <nav className="flex flex-col gap-0.5">
                            {bottomItems.map((item) => (
                                <button
                                    key={item.label}
                                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                >
                                    <item.icon className="h-3.5 w-3.5" />
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* User */}
                    <div className="border-t px-3 py-2.5 flex items-center gap-2">
                        <Avatar className="h-7 w-7">
                            <AvatarFallback className="text-[10px] bg-muted">H8</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">Hash8</p>
                            <p className="text-[10px] text-muted-foreground truncate">sk@example.com</p>
                        </div>
                        <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                </aside>

                {/* ========== MAIN CONTENT ========== */}
                <main className="flex-1 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b">
                        <h2 className="text-lg font-semibold">Documents</h2>
                        <Button size="sm" className="text-xs gap-1">
                            <CirclePlus className="h-3.5 w-3.5" />
                            Quick Create
                        </Button>
                    </div>

                    <div className="p-6 space-y-6">
                        {/* -------- STAT CARDS -------- */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map((stat) => (
                                <Card key={stat.title} className="relative overflow-hidden">
                                    <CardHeader className="pb-2 flex flex-row items-start justify-between space-y-0">
                                        <CardDescription className="text-xs font-medium">
                                            {stat.title}
                                        </CardDescription>
                                        <span className={`text-[10px] font-medium flex items-center gap-0.5 ${stat.trend === "up" ? "text-green-600" : "text-red-500"
                                            }`}>
                                            {stat.change}
                                            {stat.trend === "up" ? (
                                                <TrendingUp className="h-3 w-3" />
                                            ) : (
                                                <TrendingDown className="h-3 w-3" />
                                            )}
                                        </span>
                                    </CardHeader>
                                    <CardContent className="pb-3">
                                        <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                                        <p className="text-[10px] text-muted-foreground mt-1">
                                            {stat.description}{" "}
                                            {stat.trend === "up" ? (
                                                <TrendingUp className="inline h-2.5 w-2.5" />
                                            ) : (
                                                <TrendingDown className="inline h-2.5 w-2.5" />
                                            )}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground">{stat.subtext}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* -------- AREA CHART -------- */}
                        <Card>
                            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                                <div>
                                    <CardTitle className="text-base font-semibold">Total Visitors</CardTitle>
                                    <CardDescription className="text-xs">Total for the last 3 months</CardDescription>
                                </div>
                                <div className="flex items-center gap-1">
                                    {(["Last 3 months", "Last 30 days", "Last 7 days"] as TimeRange[]).map((label) => (
                                        <Button
                                            key={label}
                                            variant={activeRange === label ? "secondary" : "ghost"}
                                            size="sm"
                                            className="h-7 text-[10px] px-2.5"
                                            onClick={() => setActiveRange(label)}
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-[220px] w-full">
                                    <AreaChart data={chartDataByRange[activeRange]} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0.05} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="date"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            className="text-[10px]"
                                        />
                                        <YAxis hide />
                                        <ChartTooltip
                                            content={<ChartTooltipContent indicator="line" />}
                                        />
                                        <Area
                                            type="natural"
                                            dataKey="visitors"
                                            stroke="var(--color-visitors)"
                                            fill="url(#fillVisitors)"
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                        {/* -------- SECONDARY TABS + TABLE -------- */}
                        <div>
                            {/* Tab bar */}
                            <div className="flex items-center justify-between border-b pb-0 mb-4">
                                <nav className="flex items-center gap-4 text-xs">
                                    <button className="border-b-2 border-foreground pb-2.5 font-medium text-foreground">
                                        Outline
                                    </button>
                                    <button className="pb-2.5 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                        Past Performance
                                        <Badge variant="secondary" className="text-[9px] px-1.5 py-0 h-4 rounded-full">
                                            3
                                        </Badge>
                                    </button>
                                    <button className="pb-2.5 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                        Key Personnel
                                        <Badge variant="secondary" className="text-[9px] px-1.5 py-0 h-4 rounded-full">
                                            2
                                        </Badge>
                                    </button>
                                    <button className="pb-2.5 text-muted-foreground hover:text-foreground transition-colors">
                                        Focus Documents
                                    </button>
                                </nav>
                                <div className="flex items-center gap-2 pb-2.5">
                                    <Button variant="outline" size="sm" className="h-7 text-[10px] gap-1">
                                        <Columns3 className="h-3 w-3" />
                                        Customize Columns
                                        <ChevronDown className="h-3 w-3" />
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-7 text-[10px] gap-1">
                                        <Plus className="h-3 w-3" />
                                        Add Section
                                    </Button>
                                </div>
                            </div>

                            {/* Data Table */}
                            <div className="rounded-md border overflow-hidden">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="w-8 p-2 text-center">
                                                <Checkbox className="h-3.5 w-3.5" />
                                            </th>
                                            <th className="w-6 p-2" />
                                            <th className="px-3 py-2 text-left font-medium text-muted-foreground">
                                                Header
                                            </th>
                                            <th className="px-3 py-2 text-left font-medium text-muted-foreground">
                                                Section Type
                                            </th>
                                            <th className="px-3 py-2 text-left font-medium text-muted-foreground">
                                                Status
                                            </th>
                                            <th className="px-3 py-2 text-right font-medium text-muted-foreground">
                                                Target
                                            </th>
                                            <th className="px-3 py-2 text-right font-medium text-muted-foreground">
                                                Limit
                                            </th>
                                            <th className="px-3 py-2 text-left font-medium text-muted-foreground">
                                                Reviewer
                                            </th>
                                            <th className="w-8 p-2" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((row) => (
                                            <tr
                                                key={row.id}
                                                className="border-b last:border-b-0 hover:bg-muted/30 transition-colors"
                                            >
                                                <td className="p-2 text-center">
                                                    <Checkbox className="h-3.5 w-3.5" />
                                                </td>
                                                <td className="p-2 text-center">
                                                    <GripVertical className="h-3.5 w-3.5 text-muted-foreground/50" />
                                                </td>
                                                <td className="px-3 py-2 font-medium">{row.header}</td>
                                                <td className="px-3 py-2 text-muted-foreground">{row.sectionType}</td>
                                                <td className="px-3 py-2">
                                                    <div className="flex items-center gap-1.5">
                                                        <span
                                                            className={`h-2 w-2 rounded-full ${row.status === "Done"
                                                                ? "bg-green-500"
                                                                : "bg-yellow-500"
                                                                }`}
                                                        />
                                                        <span className="text-muted-foreground">{row.status}</span>
                                                    </div>
                                                </td>
                                                <td className="px-3 py-2 text-right">{row.target}</td>
                                                <td className="px-3 py-2 text-right">{row.limit}</td>
                                                <td className="px-3 py-2">
                                                    {row.reviewer ? (
                                                        <span>{row.reviewer}</span>
                                                    ) : (
                                                        <span className="text-muted-foreground italic text-[10px]">
                                                            Assign reviewer
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="p-2 text-center">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                className="h-6 w-6"
                                                            >
                                                                <MoreHorizontal className="h-3.5 w-3.5" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="w-32">
                                                            <DropdownMenuItem className="text-xs">Edit</DropdownMenuItem>
                                                            <DropdownMenuItem className="text-xs">Duplicate</DropdownMenuItem>
                                                            <DropdownMenuItem className="text-xs text-red-500">
                                                                Delete
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-between pt-4 text-xs">
                                <p className="text-muted-foreground">
                                    0 of {totalRows} row(s) selected.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-muted-foreground">Rows per page</span>
                                        <Select defaultValue={String(rowsPerPage)}>
                                            <SelectTrigger className="h-7 w-[60px] text-xs">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="10" className="text-xs">10</SelectItem>
                                                <SelectItem value="20" className="text-xs">20</SelectItem>
                                                <SelectItem value="50" className="text-xs">50</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <span className="text-muted-foreground">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Button variant="outline" size="icon" className="h-7 w-7">
                                            <ChevronsLeft className="h-3 w-3" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-7 w-7">
                                            <ChevronLeft className="h-3 w-3" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-7 w-7">
                                            <ChevronRight className="h-3 w-3" />
                                        </Button>
                                        <Button variant="outline" size="icon" className="h-7 w-7">
                                            <ChevronsRight className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
