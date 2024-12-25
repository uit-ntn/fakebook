import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Camera, GiftIcon as Gif, Image, MoreHorizontal, Share2, Smile, Sticker } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Comment {
    userName: string;
    content: string;
    timestamp: string;
}

interface PostProps {
    userName: string;
    date: string;
    content: string;
    imageUrl: string;
    likes: number;
    comments: Comment[];
    shares: number;
}

export function Post({ userName, date, content, imageUrl, likes, comments, shares }: PostProps) {
    return (
        <Card className="mb-4">
            <CardHeader className="flex flex-row items-center space-y-0 gap-2 p-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-2">
                        <Link to="#" className="font-semibold">
                            {userName}
                        </Link>
                        <span className="text-muted-foreground">· {date}</span>
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-5 w-5" />
                </Button>
            </CardHeader>
            <CardContent className="px-4 pb-2 space-y-4">
                <p>{content}</p>
                {content.includes('#') && (
                    <Link to="#" className="text-blue-600 hover:underline">
                        {content.split(' ').find((word) => word.startsWith('#'))}
                    </Link>
                )}
                <div className="relative aspect-square w-full overflow-hidden rounded-md flex">
                    <img src={imageUrl} alt="Post image" className="object-cover" />
                </div>
                <div className="flex items-center justify-between pt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <div className="flex -space-x-1">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
                                👍
                            </div>
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                                ❤️
                            </div>
                        </div>
                        <span>{likes}</span>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <span>{comments.length} Comments</span>
                        <span>{shares} Shares</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col p-0">
                <div className="flex w-full items-center justify-between px-4 py-2 mb-4 border-y">
                    <Button variant="ghost" className="flex-1">
                        Like
                    </Button>
                    <Button variant="ghost" className="flex-1">
                        Comment
                    </Button>
                    <Button variant="ghost" className="flex-1">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                    </Button>
                </div>
                {comments.map((comment, index) => (
                    <div key={index} className="flex w-full items-start space-x-2 px-4 py-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>{comment.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="bg-muted rounded-lg px-3 py-2">
                                <p className="font-semibold">{comment.userName}</p>
                                <p>{comment.content}</p>
                            </div>
                            <div className="flex items-center mt-1 space-x-2 text-sm text-muted-foreground">
                                <button className="font-semibold">Like</button>
                                <button className="font-semibold">Reply</button>
                                <span>{comment.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex w-full items-center p-4 gap-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                        <Input
                            className="border-0 bg-transparent p-0 focus-visible:ring-0"
                            placeholder="Write a comment..."
                        />
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Camera className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Gif className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Sticker className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                <Smile className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
