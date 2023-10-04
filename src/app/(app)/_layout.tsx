import { router, Slot } from 'expo-router';
import { useEffect } from 'react';

export default function AppLayout() {
    useEffect(() => {
        // this is where I'd check the user available via a provider and redirect to the right page
        return router.replace('(app)/(auth)');
    }, []);

    return <Slot />;
}