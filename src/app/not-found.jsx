"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8fafc] px-6">
      {/* Background Glow */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative Circles */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full border border-blue-100" />

      <div className="absolute bottom-1/4 right-1/4 h-56 w-56 rounded-full border border-cyan-100" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-[120px] font-extrabold leading-none text-transparent md:text-[180px]"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-3xl font-bold text-gray-900 md:text-5xl"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-5 max-w-lg text-lg leading-8 text-gray-600"
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
          Please check the URL or return to your dashboard.
        </motion.p>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full border border-blue-100 bg-white shadow-xl shadow-blue-100"
        >
          <Search className="h-14 w-14 text-blue-600" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Home size={20} />
            Go To Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-500">
          © 2026 <span className="font-semibold text-blue-600">BUSY ERP</span>.
          All rights reserved.
        </p>
      </div>
    </div>
  );
}