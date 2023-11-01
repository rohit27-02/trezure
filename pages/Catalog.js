import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';


export default function Catalog() {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div className=' w-screen relative scale-105 h-screen max-sm:scale-150 max-sm:mt-52 z-50'>
                <Viewer
                    className="w-screen object-cover abolute top-0  m-0 p-0"
                    fileUrl="/Trezure_Casa_Catalogue_2023.pdf"

                />
            </div>
        </Worker>
    );
}