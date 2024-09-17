"use client";

import { useExitModal } from "@/store/user-exit-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

export const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useExitModal();

    useEffect(() => setIsClient(true), []);

    if (!isClient) {
        return null;
    }
    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="mb-5 flex w-full items-center justify-center">
                        <Image
                            src={"/mascot_sad.svg"}
                            alt="Mascot"
                            height={80}
                            width={80}
                        />
                    </div>
                    <DialogTitle className="text-center font-bold">
                        Wait, don&apos;t go
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        You&apos;re about to leave the lesson. Are you sure?
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="mb-4">
                    <div className="flex w-full flex-col gap-y-4">
                        <Button
                            variant={"primary"}
                            className="w-full"
                            size={"lg"}
                            onClick={close}
                        >
                            Keep learning
                        </Button>
                        <Button
                            variant={"dangerOutline"}
                            className="w-full"
                            size={"lg"}
                            onClick={() => {
                                close();
                                router.push("/learn");
                            }}
                        >
                            end session
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
