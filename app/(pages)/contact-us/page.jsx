import ContactForm from '@/components/contactForm';
import ContactStats from '@/components/contactStats';
import GoogleMap from '@/components/googleMap';
import SkeletonContactForm from '@/components/skeleton/skeletonContactForm';
import SkeletonContactStats from '@/components/skeleton/skeletonContactStats';
import SkeletonGoogleMap from '@/components/skeleton/skeletonGoogleMap';
import { Suspense } from 'react';

const ContactUsPage = () => {

    return (
        <>
            <Suspense fallback={<SkeletonContactForm />}>
                <ContactForm />
            </Suspense>
            <Suspense fallback={<SkeletonContactStats />}>
                <ContactStats />
            </Suspense>
            <Suspense fallback={<SkeletonGoogleMap />}>
                <GoogleMap />
            </Suspense>
        </>
    )
}

export default ContactUsPage