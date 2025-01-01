import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Button } from '@/components/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import { UserPlus } from 'lucide-react';

interface FriendRecommendation {
    name: string;
    mutualFriends: number;
    avatarUrl: string;
}

const recommendations: FriendRecommendation[] = [
    { name: 'Alice Johnson', mutualFriends: 5, avatarUrl: '/placeholder.svg' },
    { name: 'Bob Smith', mutualFriends: 3, avatarUrl: '/placeholder.svg' },
    { name: 'Carol Williams', mutualFriends: 7, avatarUrl: '/placeholder.svg' },
    { name: 'David Brown', mutualFriends: 2, avatarUrl: '/placeholder.svg' },
    { name: 'Eva Davis', mutualFriends: 4, avatarUrl: '/placeholder.svg' },
];

export function FriendRecommendations() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>People You May Know</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                {recommendations.map((friend, index) => (
                    <div key={index} className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={friend.avatarUrl} />
                                <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">{friend.name}</p>
                                <p className="text-sm text-muted-foreground">{friend.mutualFriends} mutual friends</p>
                            </div>
                        </div>
                        <Button variant="secondary" size="sm">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Add Friend
                        </Button>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
