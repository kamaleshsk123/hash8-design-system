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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, Link as LinkIcon, Plus, User } from "lucide-react";

export function DashboardPreview() {
    return (
        <div className="w-full max-w-[1200px] mx-auto p-4 md:p-10 lg:p-16 bg-background rounded-xl border shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Payment Method Card */}
                <Card className="col-span-1 shadow-md">
                    <CardHeader>
                        <CardTitle>Payment Method</CardTitle>
                        <CardDescription>
                            Add a new payment method to your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="First Last" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="number">Card number</Label>
                            <Input id="number" placeholder="" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="month">Expires</Label>
                                <Select>
                                    <SelectTrigger id="month">
                                        <SelectValue placeholder="Month" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">January</SelectItem>
                                        <SelectItem value="2">February</SelectItem>
                                        <SelectItem value="3">March</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="year">Year</Label>
                                <Select>
                                    <SelectTrigger id="year">
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="2024">2024</SelectItem>
                                        <SelectItem value="2025">2025</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="CVC" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Continue</Button>
                    </CardFooter>
                </Card>

                {/* Team Members Card */}
                <Card className="col-span-1 shadow-md flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription>Invite your team members to collaborate.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/01.png" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">Sofia Davis</p>
                                    <p className="text-sm text-muted-foreground">m@example.com</p>
                                </div>
                            </div>
                            <Select defaultValue="edit">
                                <SelectTrigger className="ml-auto w-[110px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="edit">Can edit</SelectItem>
                                    <SelectItem value="view">Can view</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center justify-between space-x-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="/avatars/02.png" />
                                    <AvatarFallback>JL</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                    <p className="text-sm text-muted-foreground">p@example.com</p>
                                </div>
                            </div>
                            <Select defaultValue="view">
                                <SelectTrigger className="ml-auto w-[110px]">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="edit">Can edit</SelectItem>
                                    <SelectItem value="view">Can view</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">
                            <Plus className="mr-2 h-4 w-4" /> Invite Member
                        </Button>
                    </CardFooter>
                </Card>

                {/* Column 3: Stacked Cards */}
                <div className="col-span-1 grid gap-6">
                    {/* Share Link Card */}
                    <Card className="shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Share this document
                            </CardTitle>
                            <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex space-x-2 pt-4">
                                <Input value="https://example.com/link/to/document" readOnly />
                                <Button variant="secondary" className="shrink-0">
                                    Copy Link
                                </Button>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Two-factor authentication
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Enable 2FA for enhanced security.
                                    </p>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions / Notifications */}
                    <div className="grid gap-4">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-sm py-1 px-3">Archive</Badge>
                            <Badge variant="outline" className="text-sm py-1 px-3">Report</Badge>
                            <Badge variant="outline" className="text-sm py-1 px-3">Snooze</Badge>
                        </div>

                        <Card className="shadow-md">
                            <CardHeader className="pb-3">
                                <CardTitle>Cookie Settings</CardTitle>
                                <CardDescription>Manage your cookie preferences.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-1">
                                <div className="flex items-center justify-between space-x-2">
                                    <Label htmlFor="functional" className="flex flex-col space-y-1">
                                        <span>Functional Cookies</span>
                                        <span className="font-normal leading-snug text-muted-foreground">
                                            Required for basic functionality.
                                        </span>
                                    </Label>
                                    <Switch id="functional" defaultChecked />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">Save Preferences</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
