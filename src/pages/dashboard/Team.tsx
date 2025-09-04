import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Plus, Settings, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      email: "john@demorestaurant.com", 
      role: "Owner",
      permissions: ["Admin", "Analytics", "Settings", "Billing"],
      status: "Active",
      lastActive: "Online now"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@demorestaurant.com",
      role: "Manager", 
      permissions: ["Analytics", "Reservations", "Orders"],
      status: "Active",
      lastActive: "2 hours ago"
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@demorestaurant.com",
      role: "Staff",
      permissions: ["Reservations", "Orders"],
      status: "Inactive",
      lastActive: "2 days ago"
    }
  ];

  const rolePermissions = [
    {
      role: "Owner",
      description: "Full access to all features and settings",
      permissions: ["Admin Access", "Billing", "Team Management", "All Analytics", "AI Settings"]
    },
    {
      role: "Manager", 
      description: "Manage daily operations and view reports",
      permissions: ["Analytics", "Reservations", "Orders", "AI Knowledge Base", "Customer Data"]
    },
    {
      role: "Staff",
      description: "Basic access to reservations and orders",
      permissions: ["View Reservations", "Manage Orders", "Basic Reports"]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Owner":
        return "bg-purple-100 text-purple-800";
      case "Manager":
        return "bg-blue-100 text-blue-800";
      case "Staff":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="text-muted-foreground">
            Manage team members and their access permissions
          </p>
        </div>
        <Button className="bg-gradient-hero hover:shadow-elegant">
          <Plus className="h-4 w-4 mr-2" />
          Invite Team Member
        </Button>
      </div>

      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamMembers.length}</div>
            <p className="text-xs text-muted-foreground">
              {teamMembers.filter(m => m.status === "Active").length} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roles</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rolePermissions.length}</div>
            <p className="text-xs text-muted-foreground">
              permission levels
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">
              users online now
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Members */}
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Current team members and their roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{member.name}</span>
                        <Badge className={getRoleColor(member.role)}>
                          {member.role}
                        </Badge>
                        <Badge className={getStatusColor(member.status)}>
                          {member.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                      <p className="text-xs text-muted-foreground">{member.lastActive}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="h-3 w-3 mr-1" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Role Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>
              Access levels for different team roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rolePermissions.map((roleInfo) => (
                <div key={roleInfo.role} className="p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getRoleColor(roleInfo.role)}>
                      {roleInfo.role}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {roleInfo.description}
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs font-medium">Permissions:</p>
                    <div className="flex flex-wrap gap-1">
                      {roleInfo.permissions.map((permission) => (
                        <Badge key={permission} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invite Section */}
      <Card>
        <CardHeader>
          <CardTitle>Invite New Member</CardTitle>
          <CardDescription>
            Add new team members to your restaurant dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg font-medium mb-2">Invite Team Members</p>
            <p className="text-sm text-muted-foreground mb-4">
              Send email invitations to add new team members with specific roles and permissions
            </p>
            <Button className="bg-gradient-hero hover:shadow-elegant">
              <Plus className="h-4 w-4 mr-2" />
              Send Invitation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;