import { MemoryBlockStore } from 'ipfs-car/blockstore/memory';
export declare const fetch: typeof globalThis.fetch;
export declare const FormData: {
    new (form?: HTMLFormElement | undefined): FormData;
    prototype: FormData;
};
export declare const Headers: {
    new (init?: HeadersInit | undefined): Headers;
    prototype: Headers;
};
export declare const Request: {
    new (input: RequestInfo, init?: RequestInit | undefined): Request;
    prototype: Request;
};
export declare const Response: {
    new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
    prototype: Response;
    error(): Response;
    redirect(url: string | URL, status?: number | undefined): Response;
};
export declare const Blob: {
    new (blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag | undefined): Blob;
    prototype: Blob;
};
export declare const File: {
    new (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag | undefined): File;
    prototype: File;
};
export declare const ReadableStream: {
    new <R = any>(underlyingSource?: UnderlyingSource<R> | undefined, strategy?: QueuingStrategy<R> | undefined): ReadableStream<R>;
    prototype: ReadableStream<any>;
};
export declare const Blockstore: typeof MemoryBlockStore;
//# sourceMappingURL=platform.d.ts.map