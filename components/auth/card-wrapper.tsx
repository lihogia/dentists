"use client";

import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface CardWrapperProps {
    children: React.ReactNode;
    headerTitle: string;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) => {

    const onClick = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header title={headerTitle} label={headerLabel} />
            </CardHeader>
            <CardContent>
                <Button
                    size="lg"
                    className="w-full hover:bg-blue-500 hover:text-white"
                    variant="outline"
                    onClick={() => onClick("google")}
                >
                    <FcGoogle className="h-5 w-5"/>
                    &nbsp;
                    <Label>
                        Continue with Google
                    </Label>
                    
                </Button>
    
            </CardContent>
            {/*}
            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter>
            */}
        </Card>
    );
};