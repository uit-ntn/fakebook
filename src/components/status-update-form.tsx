import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Image, Smile, Video } from 'lucide-react';

export function StatusUpdateForm() {
    return (
        <Card className="mb-4">
            <CardContent className="pt-4">
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <Input className="flex-1" placeholder="What's on your mind?" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost" className="flex-1">
                    <Image className="mr-2 h-4 w-4" />
                    Photo
                </Button>
                <Button variant="ghost" className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    Video
                </Button>
                <Button variant="ghost" className="flex-1">
                    <Smile className="mr-2 h-4 w-4" />
                    Feeling
                </Button>
            </CardFooter>
        </Card>
    );
}
