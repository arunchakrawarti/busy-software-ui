"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;

    return children;
}