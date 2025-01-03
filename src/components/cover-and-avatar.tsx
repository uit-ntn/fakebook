import React from "react";

interface CoverAndAvatarProps {
  coverImage: string;
  avatarImage: string;
  userName: string;
  friendsCount: number;
}

export function CoverAndAvatar({
  coverImage,
  avatarImage,
  userName,
  friendsCount,
}: CoverAndAvatarProps) {
  return (
    <div className="relative bg-gray-300 h-80 mx-32">
      {/* Cover Image */}
      <img
        src={coverImage}
        alt="Cover"
        className="w-full h-full object-cover"
      />

      {/* Avatar and User Info */}
      <div className="absolute -bottom-16 left-8 flex items-center gap-4">
        {/* Avatar */}
        <div className="h-36 w-36 border-4 border-white rounded-full bg-gray-200">
          <img
            src={avatarImage}
            alt="Avatar"
            className="h-full w-full rounded-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="mt-8 bg-black bg-opacity-50 px-4 py-2 rounded-md">
          <h2 className="text-2xl font-bold text-white">{userName}</h2>
          <p className="text-gray-300">{friendsCount} friends</p>
          <div className="flex gap-2 mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add to story
            </button>
            <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md">
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
