
import ContactForm from "../../components/contact-form";
import Faq from "../../components/home/faq";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Slate",
    description: "Get in touch with the Slate team. We'd love to hear from you about Slate Link and our vision for focused technology.",
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
            <Faq/>
        </main>
    );
};
