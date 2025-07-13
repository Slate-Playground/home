import Link from 'next/link';

interface HeaderProps {
    variant?: 'default' | 'playful';
    size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<HeaderProps> = ({ variant = 'default', size = 'lg' }) => {
    const sizeClasses = {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl'
    };

    const gradientStyles = {
        default: {
            backgroundImage: 'linear-gradient(135deg, #C0C0C0 0%, #989595 100%)',
        },
        playful: {
            backgroundImage: 'linear-gradient(135deg, #A855F7 0%, #10B981 50%, #3B82F6 100%)',
        }
    };

    return (
        <Link href="/" className="flex items-center">
            <span 
                className={`font-bold bg-gradient-to-br bg-clip-text text-transparent ${sizeClasses[size]}`}
                style={{
                    ...gradientStyles[variant],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}
            >
                Slate
            </span>
        </Link>
    );
};

export default Logo;
