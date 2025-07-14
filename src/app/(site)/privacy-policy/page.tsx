import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Privacy Policy | Slate",
    description: "Learn how Slate collects, uses, and protects your personal information when you use Slate Link and our services.",
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
                            Privacy Policy
                        </h1>
                            <p className='text-xl text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                How we protect your privacy and handle your data at Slate.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-dark_black p-10 rounded-3xl border border-white/50 dark:border-white/10 shadow-xl">
                            <div className='prose prose-lg dark:prose-invert max-w-none'>
                                <p className='text-dark_black/80 dark:text-white/80 leading-relaxed mb-6'>
                                    At Slate, we believe privacy is a fundamental human right. This Privacy Policy explains how we collect, use, and protect your information when you use Slate Link and our services.
                                </p>

                                <div className='space-y-8'>
                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>Information We Collect</h3>
                                        <div className='space-y-4'>
                                            <div>
                                                <h4 className='text-lg font-semibold text-dark_black dark:text-white mb-2'>Device Information</h4>
                                                <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                    Slate Link is designed to be offline-first. We collect minimal device information necessary for functionality, including device settings, preferences, and usage patterns to improve your experience.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className='text-lg font-semibold text-dark_black dark:text-white mb-2'>Account Information</h4>
                                                <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                    When you create an account or join our waitlist, we collect your name, email address, and any additional information you choose to provide.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className='text-lg font-semibold text-dark_black dark:text-white mb-2'>Usage Data</h4>
                                                <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                    We collect anonymous usage data to understand how Slate Link is used and to improve our services. This data is aggregated and cannot be used to identify individual users.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>How We Use Your Information</h3>
                                        <ul className='space-y-2 text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            <li>• To provide and maintain Slate Link functionality</li>
                                            <li>• To communicate with you about product updates and announcements</li>
                                            <li>• To improve our products and services</li>
                                            <li>• To provide customer support</li>
                                            <li>• To ensure the security and integrity of our services</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>Data Storage and Security</h3>
                                        <div className='space-y-4'>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Local-First Design:</strong> Slate Link stores your data locally on the device using encrypted SD storage. Your personal information stays on your device unless you choose to sync it.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using industry-standard protocols.
                                            </p>
                                            <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                                <strong>Access Control:</strong> We implement strict access controls and regularly audit our systems to ensure your data remains secure.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>Your Rights</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed mb-4'>
                                            You have the right to:
                                        </p>
                                        <ul className='space-y-2 text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            <li>• Access your personal information</li>
                                            <li>• Correct inaccurate information</li>
                                            <li>• Delete your account and associated data</li>
                                            <li>• Opt out of marketing communications</li>
                                            <li>• Export your data</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>Third-Party Services</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            We may use third-party services for analytics, customer support, and payment processing. These services have their own privacy policies, and we encourage you to review them.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>Updates to This Policy</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                                        </p>
                            </div>

                                    <div>
                                        <h3 className='text-2xl font-bold text-dark_black dark:text-white mb-4'>Contact Us</h3>
                                        <p className='text-dark_black/70 dark:text-white/70 leading-relaxed'>
                                            If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                                            <Link href='mailto:privacy@slate.com' className='text-purple-600 dark:text-purple-400 hover:underline'>
                                                privacy@slate.com
                                            </Link>
                                        </p>
                                    </div>

                                    <div className='border-t border-gray-200 dark:border-gray-700 pt-6'>
                                        <p className='text-sm text-dark_black/60 dark:text-white/60'>
                                            <strong>Last Updated:</strong> December 2024
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
