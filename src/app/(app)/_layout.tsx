import { router, Slot } from 'expo-router';
import { useEffect } from 'react';

export default function AppLayout() {
    useEffect(() => {
        return router.replace('(app)/(auth)');
    }, []);

    return <Slot />;
}