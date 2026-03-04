import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    ArrowRight,
    ArrowLeft,
    Check,
    ChevronRight,
    Copy,
    Eye,
    Globe,
    Loader2,
    Minus,
    MoreHorizontal,
    Plus,
    Search,
    Send,
    Settings,
    Star,
} from "lucide-react";

export function DashboardPreview() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* ========== COLUMN 1 — Payment Method Card ========== */}
                <div className="col-span-1 flex flex-col gap-4">
                    <Card>
                        <CardHeader className="pb-4">
                            <CardTitle className="text-base">Payment Method</CardTitle>
                            <CardDescription className="text-xs">
                                All transactions are secure and encrypted
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-1.5">
                                <Label htmlFor="pm-name" className="text-xs font-medium">
                                    Name on Card
                                </Label>
                                <Input
                                    id="pm-name"
                                    placeholder="John Doe"
                                    className="h-8 text-xs"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2 grid gap-1.5">
                                    <Label htmlFor="pm-number" className="text-xs font-medium">
                                        Card Number
                                    </Label>
                                    <Input
                                        id="pm-number"
                                        placeholder="1234 5678 9012 3456"
                                        className="h-8 text-xs"
                                    />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="pm-cvv" className="text-xs font-medium">
                                        CVV
                                    </Label>
                                    <Input
                                        id="pm-cvv"
                                        placeholder="123"
                                        className="h-8 text-xs"
                                    />
                                </div>
                            </div>
                            <p className="text-[10px] text-muted-foreground -mt-2">
                                Enter your 16-digit number.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-1.5">
                                    <Label htmlFor="pm-month" className="text-xs font-medium">
                                        Month
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="pm-month" className="h-8 text-xs">
                                            <SelectValue placeholder="MM" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, i) => (
                                                <SelectItem key={i} value={String(i + 1)}>
                                                    {String(i + 1).padStart(2, "0")}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="pm-year" className="text-xs font-medium">
                                        Year
                                    </Label>
                                    <Select>
                                        <SelectTrigger id="pm-year" className="h-8 text-xs">
                                            <SelectValue placeholder="YYYY" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="2025">2025</SelectItem>
                                            <SelectItem value="2026">2026</SelectItem>
                                            <SelectItem value="2027">2027</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Separator />

                            <div>
                                <p className="text-sm font-semibold">Billing Address</p>
                                <p className="text-[10px] text-muted-foreground mt-0.5">
                                    The billing address associated with your payment method
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="pm-same" defaultChecked />
                                <Label htmlFor="pm-same" className="text-xs">
                                    Same as shipping address
                                </Label>
                            </div>

                            <Separator />

                            <div className="grid gap-1.5">
                                <Label htmlFor="pm-comments" className="text-xs font-medium">
                                    Comments
                                </Label>
                                <Textarea
                                    id="pm-comments"
                                    placeholder="Add any additional comments"
                                    className="min-h-[60px] text-xs resize-none"
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button size="sm" className="text-xs">Submit</Button>
                            <Button variant="outline" size="sm" className="text-xs">Cancel</Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* ========== COLUMN 2 — Team, Badges, Slider, Search, Chat ========== */}
                <div className="col-span-1 flex flex-col gap-4">
                    {/* Team Members — no card wrapper */}
                    <div className="flex flex-col items-center text-center gap-3 py-4">
                        <div className="flex -space-x-2">
                            <Avatar className="h-8 w-8 border-2 border-background">
                                <AvatarFallback className="text-[10px] bg-muted">SD</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-background">
                                <AvatarFallback className="text-[10px] bg-muted">JL</AvatarFallback>
                            </Avatar>
                            <Avatar className="h-8 w-8 border-2 border-background">
                                <AvatarFallback className="text-[10px] bg-primary text-primary-foreground">+3</AvatarFallback>
                            </Avatar>
                        </div>
                        <p className="text-sm font-semibold">No Team Members</p>
                        <p className="text-[10px] text-muted-foreground leading-relaxed">
                            Invite your team to collaborate on this project.
                        </p>
                        <Button size="sm" className="text-xs">
                            <Plus className="mr-1 h-3 w-3" /> Invite Members
                        </Button>
                    </div>

                    {/* Badges: Syncing / Updating / Loading */}
                    <div className="flex items-center gap-2">
                        <Badge className="text-[10px] px-2.5 py-0.5 rounded-full">
                            <Loader2 className="mr-1 h-2.5 w-2.5 animate-spin" /> Syncing
                        </Badge>
                        <Badge variant="outline" className="text-[10px] px-2.5 py-0.5 rounded-full">
                            <Loader2 className="mr-1 h-2.5 w-2.5 animate-spin" /> Updating
                        </Badge>
                        <Badge variant="outline" className="text-[10px] px-2.5 py-0.5 rounded-full">
                            <Loader2 className="mr-1 h-2.5 w-2.5 animate-spin" /> Loading
                        </Badge>
                    </div>

                    {/* Send a message input — no card, just inline with + and settings icon */}
                    <div className="flex items-center gap-2">
                        <Plus className="h-4 w-4 text-muted-foreground shrink-0" />
                        <Input
                            placeholder="Send a message..."
                            className="h-8 text-xs flex-1"
                        />
                        <Settings className="h-4 w-4 text-muted-foreground shrink-0" />
                    </div>

                    {/* Price Range — no card wrapper */}
                    <div className="grid gap-2">
                        <Label className="text-sm font-semibold">Price Range</Label>
                        <p className="text-[10px] text-muted-foreground">
                            Set your budget range ($370 – 780).
                        </p>
                        <Slider
                            defaultValue={[370]}
                            max={780}
                            min={0}
                            step={10}
                            className="mt-1"
                        />
                    </div>

                    {/* Search with Results — no card */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search..." className="h-8 text-xs pl-7" />
                        </div>
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                            12 results
                        </span>
                    </div>

                    {/* URL Input — no card */}
                    <div className="flex items-center gap-2">
                        <Input
                            value="https:// example.com"
                            readOnly
                            className="h-8 text-xs flex-1"
                        />
                        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                            <Copy className="h-3 w-3" />
                        </Button>
                    </div>

                    {/* Chat Input — no card wrapper */}
                    <div className="rounded-md border p-3 grid gap-2.5">
                        <Input
                            placeholder="Ask, Search or Chat..."
                            className="h-8 text-xs border-0 shadow-none p-0 focus-visible:ring-0"
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Plus className="h-3 w-3 text-muted-foreground" />
                                <span className="text-[10px] text-muted-foreground">Auto</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-muted-foreground">52% used</span>
                                <Button size="icon" className="h-5 w-5 rounded-full">
                                    <ArrowRight className="h-2.5 w-2.5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* @mention input — no card */}
                    <div className="flex items-center gap-2">
                        <Input value="@shadcn" readOnly className="h-8 text-xs flex-1" />
                        <Button size="icon" className="h-7 w-7 rounded-full shrink-0">
                            <Send className="h-3 w-3" />
                        </Button>
                    </div>
                </div>

                {/* ========== COLUMN 3 — URL bar, 2FA, Environment, GPU, Toggle ========== */}
                <div className="col-span-1 flex flex-col gap-4">
                    {/* URL Bar */}
                    <Card>
                        <CardContent className="pt-4 pb-3">
                            <div className="flex items-center gap-2">
                                <Globe className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground flex-1">https://</span>
                                <Star className="h-3.5 w-3.5 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Two-factor authentication */}
                    <Card>
                        <CardContent className="pt-4 pb-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-medium">Two-factor authentication</p>
                                    <p className="text-[10px] text-muted-foreground mt-0.5">
                                        Verify via email or phone number.
                                    </p>
                                </div>
                                <Button size="sm" className="h-7 text-[10px] px-3">Enable</Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Profile Verified */}
                    <Card>
                        <CardContent className="pt-4 pb-3">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-green-600 shrink-0" />
                                <p className="text-xs flex-1">Your profile has been verified.</p>
                                <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Appearance Settings separator */}
                    <div className="flex items-center gap-3">
                        <Separator className="flex-1" />
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                            Appearance Settings
                        </span>
                        <Separator className="flex-1" />
                    </div>

                    {/* Compute Environment */}
                    <div>
                        <p className="text-sm font-semibold">Compute Environment</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5 mb-3">
                            Select the compute environment for your cluster.
                        </p>
                        <RadioGroup defaultValue="kubernetes" className="gap-3">
                            <div className="flex items-start space-x-3 rounded-md border p-3">
                                <RadioGroupItem value="kubernetes" id="kubernetes" className="mt-0.5" />
                                <Label htmlFor="kubernetes" className="flex flex-col gap-0.5 cursor-pointer">
                                    <span className="text-xs font-medium">Kubernetes</span>
                                    <span className="text-[10px] text-muted-foreground font-normal leading-relaxed">
                                        Run GPU workloads on a K8s configured cluster. This is the default.
                                    </span>
                                </Label>
                            </div>
                            <div className="flex items-start space-x-3 rounded-md border p-3">
                                <RadioGroupItem value="vm" id="vm" className="mt-0.5" />
                                <Label htmlFor="vm" className="flex flex-col gap-0.5 cursor-pointer">
                                    <span className="text-xs font-medium">Virtual Machine</span>
                                    <span className="text-[10px] text-muted-foreground font-normal leading-relaxed">
                                        Access a VM configured cluster to run workloads. (Coming soon)
                                    </span>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Number of GPUs — no card */}
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="text-xs font-medium">Number of GPUs</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">You can add more later.</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold w-6 text-center">8</span>
                            <Button variant="outline" size="icon" className="h-7 w-7">
                                <Minus className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-7 w-7">
                                <Plus className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>

                    {/* Wallpaper Tinting — no card */}
                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="text-xs font-medium">Wallpaper Tinting</p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">Allow the wallpaper to be tinted.</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>

                {/* ========== COLUMN 4 — Context, Actions, Pagination, Survey, Spinner ========== */}
                <div className="col-span-1 flex flex-col gap-4">
                    {/* Add Context — no card, just border */}
                    <div className="rounded-md border p-4 grid gap-3">
                        <p className="text-xs text-muted-foreground">+ Add context</p>
                        <Input
                            placeholder="Ask, search, or make anything..."
                            className="h-8 text-xs"
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <Eye className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">Auto</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Eye className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground">All Sources</span>
                                </div>
                            </div>
                            <Button size="icon" className="h-5 w-5 rounded-full">
                                <ArrowRight className="h-2.5 w-2.5" />
                            </Button>
                        </div>
                    </div>

                    {/* Action Buttons — no card */}
                    <div className="flex items-center gap-1.5">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                            <ArrowLeft className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="h-7 text-[10px] px-2.5">Archive</Button>
                        <Button variant="outline" size="sm" className="h-7 text-[10px] px-2.5">Report</Button>
                        <Button variant="outline" size="sm" className="h-7 text-[10px] px-2.5">Snooze</Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                            <MoreHorizontal className="h-3 w-3" />
                        </Button>
                    </div>

                    {/* Checkbox: I agree to terms — dark background like reference */}
                    <div className="flex items-center space-x-2 rounded-md bg-primary text-primary-foreground p-3">
                        <Checkbox id="terms" defaultChecked className="border-primary-foreground data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary" />
                        <Label htmlFor="terms" className="text-xs text-primary-foreground">
                            I agree to the terms and conditions
                        </Label>
                    </div>

                    {/* Pagination — no card */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3].map((n) => (
                                <Button
                                    key={n}
                                    variant={n === 1 ? "default" : "outline"}
                                    size="icon"
                                    className="h-7 w-7 text-[10px]"
                                >
                                    {n}
                                </Button>
                            ))}
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <ArrowLeft className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <ArrowRight className="h-3 w-3" />
                            </Button>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Button variant="outline" size="sm" className="h-7 text-[10px] px-2.5 gap-1">
                                <Eye className="h-3 w-3" /> Copilot
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                                <Check className="h-3 w-3" />
                            </Button>
                        </div>
                    </div>

                    {/* How did you hear about us? — no card wrapper */}
                    <div>
                        <p className="text-sm font-semibold">How did you hear about us?</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5 mb-3">
                            Select the option that best describes how you...
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            <Badge className="text-[10px] px-2.5 py-0.5 rounded-full cursor-pointer">
                                Social Media
                            </Badge>
                            <Badge className="text-[10px] px-2.5 py-0.5 rounded-full cursor-pointer">
                                Search Engine
                            </Badge>
                            <Badge variant="outline" className="text-[10px] px-2.5 py-0.5 rounded-full cursor-pointer">
                                Referral
                            </Badge>
                            <Badge variant="outline" className="text-[10px] px-2.5 py-0.5 rounded-full cursor-pointer">
                                Other
                            </Badge>
                        </div>
                    </div>

                    {/* Processing your request — no card */}
                    <div className="flex flex-col items-center text-center gap-3 py-4">
                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                        <div>
                            <p className="text-xs font-semibold">Processing your request</p>
                            <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">
                                Please wait while we process your request. Do not refresh the page.
                            </p>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs mt-1">Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
