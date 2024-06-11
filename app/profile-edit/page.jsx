"use client"
import React, { useState, useEffect } from 'react';
import { updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { firebaseAuth } from '@/app/context/Firebase';
import { Button, Input } from '@nextui-org/react';

function ProfileEditPage() {
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const user = firebaseAuth.currentUser;
        if (user) {
            setDisplayName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [firebaseAuth]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await updateProfile(firebaseAuth.currentUser, {
                displayName,
                photoURL,
            });
            // Profile updated successfully, redirect back to a protected page
            // router.push('/protected-page');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="profile-edit-container">
            <div className="profile-edit-header">
                <div>Edit Profile</div>
            </div>
            <form className="profile-edit-form" onSubmit={handleSubmit}>
                <label htmlFor="displayName" className="profile-edit-label block">
                    Display Name:
                </label>
                <Input
                    type="text"
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    className="w-full rounded-md border border-gray-300"
                />
                <label htmlFor="photoURL" className="profile-edit-label block mt-4">
                    Profile Picture URL (optional):
                </label>
                <Input
                    type="url"
                    id="photoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="w-full rounded-md border border-gray-300"
                />
                <Button
                    disabled={isLoading}
                    type="submit"
                    className="mt-4 rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
                >
                    {isLoading ? 'Saving...' : 'Save Profile'}
                </Button>
                {error && <p className="profile-edit-error text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
}

export default ProfileEditPage;
