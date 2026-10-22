"use client";

import { useState } from "react";
import { HiCheck, HiOutlineClipboardDocument } from "react-icons/hi2";
import Image from "next/image";

export function DonationAccount() {
    const [copied, setCopied] = useState(false);
    const [copyFailed, setCopyFailed] = useState(false);

    async function copyAccountNumber() {
        try {
            await navigator.clipboard.writeText("1310942570");
            setCopied(true);
            setCopyFailed(false);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopyFailed(true);
            setCopied(false);
        }
    }

    return (
        <section
            className="bg-surface-muted px-6 py-[76px]"
            aria-labelledby="donation-title"
        >
            <div className="mx-auto grid max-w-310 grid-cols-1 items-center gap-9 md:grid-cols-[minmax(0,0.9fr)_minmax(380px,1.1fr)] md:gap-14">
                <div>
                    <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.14em] text-secondary-red">
                        Support the work
                    </p>
                    <h2
                        id="donation-title"
                        className="mb-5 max-w-130 text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold leading-[0.98] tracking-[-0.06em] text-primary md:text-6xl"
                    >
                        Help us reach more communities.
                    </h2>
                    <p className="max-w-125 text-base leading-7 text-muted">
                        Your support helps APC CARES strengthen grassroots engagement and
                        expand access to community resources and empowerment opportunities.
                    </p>
                </div>

                <div className="border-l-4 border-secondary-green bg-surface p-6 md:p-8">
                    <div className="flex items-center gap-4 border-b border-border pb-5">
                        <span className="flex size-12 shrink-0 items-center justify-center bg-primary">
                            <Image
                                src="/logo.png"
                                alt="APC CARES logo"
                                width={48}
                                height={48}
                                className="object-contain"
                                loading="eager"
                            />
                        </span>
                        <div>
                            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">
                                Donate by bank transfer
                            </p>
                            <p className="mt-1 text-base font-extrabold text-primary">
                                PROVIDUS BANK
                            </p>
                        </div>
                    </div>

                    <dl className="m-0">
                        <div className="flex items-center justify-between gap-5 border-b border-border py-4">
                            <dt className="text-sm text-muted">Account name</dt>
                            <dd className="m-0 text-right text-sm font-extrabold text-primary">
                                APC CARES SERVICES
                            </dd>
                        </div>
                        <div className="flex items-center justify-between gap-5 border-b border-border py-4">
                            <dt className="text-sm text-muted">Account number</dt>
                            <dd className="m-0 flex items-center gap-3 text-right font-extrabold text-primary">
                                <span className="select-all text-xl tracking-[0.04em]">
                                    1310942570
                                </span>
                                <button
                                    className="inline-flex size-10 shrink-0 items-center justify-center border border-border bg-transparent text-primary transition-colors hover:bg-primary hover:text-white"
                                    type="button"
                                    onClick={copyAccountNumber}
                                    aria-label={copied ? "Account number copied" : "Copy account number"}
                                    title={copied ? "Copied" : "Copy account number"}
                                >
                                    {copied ? (
                                        <HiCheck className="size-5" aria-hidden="true" />
                                    ) : (
                                        <HiOutlineClipboardDocument className="size-5" aria-hidden="true" />
                                    )}
                                </button>
                            </dd>
                        </div>
                    </dl>
                    <p className="mt-2 min-h-[18px] text-xs text-muted" aria-live="polite">
                        {copied
                            ? "Account number copied."
                            : copyFailed
                                ? "Copy unavailable. Select the number to copy it."
                                : ""}
                    </p>
                </div>
            </div>
        </section>
    );
}