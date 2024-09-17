import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

type Props = {
    disabled?: boolean;
    lessonId?: boolean;
    status: "correct" | "wrong" | "none" | "completed";
    onCheck: () => void;
};

export const Footer = ({ lessonId, disabled, onCheck, status }: Props) => {
    useKey("Enter", onCheck, {}, [onCheck]);
    const isMobile = useMedia("(max-width:1024px)");
    return (
        <footer
            className={cn(
                "lg:-h-[140px] h-[100px] border-t-2",
                status == "correct" && "border-transparent bg-green-100",
                status === "wrong" && "border-transparent bg-rose-100",
            )}
        >
            <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
                {status === "correct" && (
                    <div className="fontbold flex items-center text-base text-green-500 lg:text-2xl">
                        <CheckCircle className="h-6 w-6 lg:h-10" />
                        Nicely done!
                    </div>
                )}
                {status === "wrong" && (
                    <div className="flex items-center gap-2 text-base font-bold text-rose-500 lg:text-2xl">
                        <CheckCircle className="h-6 w-6 lg:h-10" />
                        Try again.
                    </div>
                )}
                {status === "completed" && (
                    <Button
                        size={isMobile ? "sm" : "lg"}
                        onClick={() =>
                            (window.location.href = `/lesson/${lessonId}`)
                        }
                        variant={"default"}
                    >
                        Practice again
                    </Button>
                )}
                <Button
                    className="ml-auto"
                    disabled={disabled}
                    onClick={onCheck}
                    size={isMobile ? "sm" : "lg"}
                    variant={status === "wrong" ? "danger" : "secondary"}
                >
                    {status === "none" && "Check"}
                    {status === "correct" && "Next"}
                    {status === "wrong" && "Retry"}
                    {status === "completed" && "Continue"}
                </Button>
            </div>
        </footer>
    );
};
