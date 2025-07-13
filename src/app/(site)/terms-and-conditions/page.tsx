import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Terms & Conditions | Slate",
    description: "Terms and conditions for using Slate Link and Slate services.",
};

export default function Page() {
    return (
        <section>
            <div
                className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-purple-500/20 before:via-white before:to-emerald-500/20 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-purple-600/20 dark:before:via-black dark:before:to-emerald-600/20 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
            >
                <div className="container relative z-10">
                    <div className='flex flex-col gap-8'>
                        <div className='text-center max-w-4xl mx-auto'>
                            <h1 className='md:text-6xl text-4xl font-bold mb-6'>
                            Terms & Conditions
                        </h1>
                            <p className='text-xl text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                Terms of service for Slate Link and Slate services.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-dark_black p-10 rounded-3xl border border-white/50 dark:border-white/10 shadow-xl">
                            <div className='prose prose-lg dark:prose-invert max-w-none'>
                                <p className='text-dark_black/80 dark:text-white/80 leading-relaxed mb-6'>
                                    These Terms of Service ("Agreement") govern your use of Slate Link and related services provided by Slate ("we," "us," or "our"). By using our services, you agree to these terms.
                                </p>

                                <div className='space-y-8'>
                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>1. Acceptance of Terms</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            By accessing or using Slate Link, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>2. Description of Services</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed mb-4'>
                                            Slate Link is a minimalist offline-first companion device designed to help you think, focus, and live better. Our services include:
                                        </p>
                                        <ul className='space-y-2 text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            <li>• The Slate Link hardware device</li>
                                            <li>• SlateOS operating system</li>
                                            <li>• Companion mobile and web applications</li>
                                            <li>• Cloud synchronization services (optional)</li>
                                            <li>• Customer support and maintenance</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>3. User Accounts</h3>
                                        <div className='space-y-4'>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Account Creation:</strong> You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Account Security:</strong> You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>4. Acceptable Use</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed mb-4'>
                                            You agree not to:
                                        </p>
                                        <ul className='space-y-2 text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            <li>• Use Slate Link for any illegal or unauthorized purpose</li>
                                            <li>• Attempt to reverse engineer or modify the device</li>
                                            <li>• Interfere with or disrupt our services</li>
                                            <li>• Share your account credentials with others</li>
                                            <li>• Use our services to harm others or their property</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>5. Privacy and Data</h3>
                                        <div className='space-y-4'>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Privacy Policy:</strong> Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Data Ownership:</strong> You retain ownership of your data. Slate Link stores your data locally, and you control what gets synchronized to our servers.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>6. Intellectual Property</h3>
                                        <div className='space-y-4'>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Our Rights:</strong> Slate Link, SlateOS, and related software are protected by intellectual property laws. We retain all rights to our technology and branding.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Your Content:</strong> You retain ownership of any content you create using Slate Link. You grant us a limited license to process your data to provide our services.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>7. Warranty and Support</h3>
                                        <div className='space-y-4'>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Hardware Warranty:</strong> Slate Link comes with a limited warranty covering defects in materials and workmanship for one year from purchase.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Software Updates:</strong> We provide regular software updates to improve functionality and security. Updates are provided as-is.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Support:</strong> We provide customer support through email and our website. Response times may vary based on support tier.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>8. Limitation of Liability</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            To the maximum extent permitted by law, Slate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>9. Termination</h3>
                                        <div className='space-y-4'>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>By You:</strong> You may stop using our services at any time by deleting your account and discontinuing use.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>By Us:</strong> We may terminate or suspend your access to our services if you violate these terms or for other legitimate business reasons.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>10. Changes to Terms</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            We may update these terms from time to time. We will notify you of material changes by posting the new terms on our website and updating the effective date.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>11. Governing Law</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            These terms are governed by the laws of California, United States. Any disputes will be resolved in the courts of San Francisco, California.
                                        </p>
                            </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>12. Contact Information</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            If you have questions about these terms, please contact us at{' '}
                                            <a href='mailto:legal@slate.com' className='text-purple-600 dark:text-purple-400 hover:underline'>
                                                legal@slate.com
                                            </a>
                                        </p>
                                    </div>

                                    <div className='border-t border-gray-200 dark:border-gray-700 pt-6'>
                                        <p className='text-sm text-dark_black/60 dark:text-white/60'>
                                            <strong>Effective Date:</strong> December 2024
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
