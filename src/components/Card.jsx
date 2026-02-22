import { useState, useCallback } from "react";

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall < delay) return;
        lastCall = now;
        func(...args);
    };
}

export default function Card({ className, children }) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e) => {
            const maxAngle = 4;
            e.persist();
            const card = e.currentTarget;
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const centerX = box.width / 2;
            const centerY = box.height / 2;
            const rotateX = ((y - centerY) / (box.height / 2)) * maxAngle;
            const rotateY = ((centerX - x) / (box.width / 2)) * maxAngle;

            setRotate({ x: rotateX, y: rotateY });
        }, 25),
        []
    );

    const onMouseLeave = () => setRotate({ x: 0, y: 0 });

    return (
        <div className={`card-base ${className}`}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}

            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: "all 200ms ease",
            }}
        >
            {children}
        </div>
    );
}
