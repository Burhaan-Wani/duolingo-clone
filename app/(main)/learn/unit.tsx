import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./description";
import { LessonButton } from "./lesson-button";
import React from "react";

type Props = {
    id: number;
    order: number;
    title: string;
    description: string;
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean[];
    })[];
    activeLesson:
        | (typeof lessons.$inferSelect & {
              unit: typeof units.$inferSelect;
          })
        | undefined;
    activeLessonPercentage: number;
};

export const Unit = ({
    id,
    activeLesson,
    activeLessonPercentage,
    description,
    lessons,
    order,
    title,
}: Props) => {
    return (
        <>
            <UnitBanner title={title} description={description} />
            <div className="relative flex flex-col items-center">
                {lessons.map((lesson, index) => {
                    const isCurrent = true || lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;
                    return (
                        <React.Fragment key={lesson.id}>
                            <LessonButton
                                id={lesson.id}
                                index={lesson.id}
                                totalCount={lessons.length - 1}
                                current={isCurrent}
                                locked={isLocked}
                                percentage={activeLessonPercentage}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
};
