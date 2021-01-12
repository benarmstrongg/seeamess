import { EventHandler, SyntheticEvent, useLayoutEffect, useRef } from "react";

export const useCursorCorrector = () => {
    const inputRef = useRef<EventHandler<SyntheticEvent<HTMLInputElement, Event>>>();
    const eventRef = useRef<SyntheticEvent<HTMLInputElement, Event>>();
    useLayoutEffect(() => {
        if (inputRef.current && eventRef.current) {
            inputRef.current(eventRef.current);
            inputRef.current = undefined;
            eventRef.current = undefined;
        }
    })
    const correctCallback = (event: SyntheticEvent<HTMLInputElement, Event>, fn: EventHandler<SyntheticEvent<HTMLInputElement, Event>>) => {
        inputRef.current = fn;
        eventRef.current = event;
    };
    return correctCallback;
}