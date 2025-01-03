import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Button } from '@/components/button';
import { Card, CardContent, CardFooter } from '@/components/card';
import { Image, Smile, Video } from 'lucide-react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/userSlice'; 

export function StatusUpdateForm() {
    const userInfo = useSelector(userSelector);
    const [open, setOpen] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [selectedMedia, setSelectedMedia] = useState<File[]>([]);
    const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo');
    const [privacy, setPrivacy] = useState<'Only me' | 'Friends' | 'Public'>('Only me');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setStatusText('');
        setSelectedMedia([]);
    };

    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'photo' | 'video') => {
        setMediaType(type);
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setSelectedMedia((prev) => [...prev, ...files]);
        }
    };

    const handlePost = () => {
        console.log('Posting:', statusText, selectedMedia, privacy);
        handleClose();
    };

    const handlePrivacyClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePrivacyClose = (option: 'Only me' | 'Friends' | 'Public') => {
        setPrivacy(option);
        setAnchorEl(null);
    };

    return (
        <>
            <Card className="mb-4">
                <CardContent className="pt-4">
                    <div className="flex items-center space-x-4">
                        <Avatar className="border-2 border-indigo-500">
                            <AvatarImage src={userInfo.avatar || 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/116264906_340041997020888_6356968955999431305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BNpeF58lw3kQ7kNvgFku822&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AnGkym0g8PJBjJfdFwR6Y1-&oh=00_AYCuZCWsMDlqJl0KtSxRU9BOHElgHWfzDnmKTdY2VILIAA&oe=679F1C0F'} />
                            <AvatarFallback>{userInfo.username?.[0] || 'UN'}</AvatarFallback>
                        </Avatar>
                        <TextField
                            onClick={handleOpen}
                            placeholder={`What's on your mind, ${userInfo.name || 'User'}?`}
                            fullWidth
                            variant="outlined"
                            sx={{ backgroundColor: 'white' }}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="ghost" className="flex-1" onClick={handleOpen}>
                        <Image className="mr-2 h-4 w-4" />
                        Photo
                    </Button>
                    <Button variant="ghost" className="flex-1" onClick={handleOpen}>
                        <Video className="mr-2 h-4 w-4" />
                        Video
                    </Button>
                    <Button variant="ghost" className="flex-1">
                        <Smile className="mr-2 h-4 w-4" />
                        Feeling
                    </Button>
                </CardFooter>
            </Card>

            {/* Dialog */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle
                    sx={{
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#4f46e5',
                        borderBottom: '1px solid #e5e7eb',
                    }}
                >
                    Create Post
                </DialogTitle>
                <DialogContent>
                    <div className="flex items-center space-x-4 mb-4 mt-4">
                        <Avatar className="border-2 border-indigo-500">
                            <AvatarImage src={userInfo.avatar || 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-9/116264906_340041997020888_6356968955999431305_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=BNpeF58lw3kQ7kNvgFku822&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AnGkym0g8PJBjJfdFwR6Y1-&oh=00_AYCuZCWsMDlqJl0KtSxRU9BOHElgHWfzDnmKTdY2VILIAA&oe=679F1C0F'} />
                            <AvatarFallback>{userInfo.username?.[0] || 'UN'}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{userInfo.username || 'User'}</p>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handlePrivacyClick}
                                className="capitalize border border-gray-300 rounded-md px-2 py-1"
                            >
                                {privacy}
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handlePrivacyClose('Only me')}>
                                    Only me
                                </MenuItem>
                                <MenuItem onClick={() => handlePrivacyClose('Friends')}>
                                    Friends
                                </MenuItem>
                                <MenuItem onClick={() => handlePrivacyClose('Public')}>
                                    Public
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <TextField
                        value={statusText}
                        onChange={(e) => setStatusText(e.target.value)}
                        placeholder={`What's on your mind, ${userInfo.name || 'User'}?`}
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <div className="mt-4">
                        {selectedMedia.map((media, index) => (
                            <div key={index} className="relative mb-4">
                                {mediaType === 'photo' ? (
                                    <img
                                        src={URL.createObjectURL(media)}
                                        alt={`Selected ${index}`}
                                        className="w-full rounded-md"
                                    />
                                ) : (
                                    <video
                                        src={URL.createObjectURL(media)}
                                        controls
                                        className="w-full rounded-md"
                                    />
                                )}
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() =>
                                        setSelectedMedia((prev) =>
                                            prev.filter((_, i) => i !== index)
                                        )
                                    }
                                    className="absolute top-2 right-2"
                                >
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <div className="flex gap-4 mt-4">
                            <label className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 cursor-pointer">
                                Add Photos
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    multiple
                                    onChange={(e) => handleMediaChange(e, 'photo')}
                                />
                            </label>
                            <label className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 cursor-pointer">
                                Add Videos
                                <input
                                    type="file"
                                    accept="video/*"
                                    hidden
                                    multiple
                                    onChange={(e) => handleMediaChange(e, 'video')}
                                />
                            </label>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button onClick={handlePost} color="primary" variant="outline">
                        Post
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
