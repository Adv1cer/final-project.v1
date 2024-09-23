"use client"

import { AuthProvider } from "@/app/provider"
import IdleTimer from "@/app/IdleTimeout"

export default function TicketLayout({ children }) {
    return (

        <section>
            <header>
            </header>
            <AuthProvider>
            <IdleTimer />
                {children}
            </AuthProvider>
        </section>

    )
}
