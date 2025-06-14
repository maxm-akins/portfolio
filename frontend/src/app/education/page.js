// app/experience/page.js
'use client';
import { motion } from 'framer-motion';
import { AgGridReact } from 'ag-grid-react';
import { themeBalham } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';


// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const coursework = [
    { course: 'Data Structures & Algorithms', term: 'Fall 2022', grade: 'A' },
    { course: 'Operating Systems', term: 'Spring 2023', grade: 'A-' },
    { course: 'Database Systems', term: 'Fall 2023', grade: 'A' },
    { course: 'Computer Networks', term: 'Spring 2024', grade: 'A' },
    { course: 'Software Engineering', term: 'Fall 2024', grade: 'A' },
];

const columns = [
    { field: 'course', headerName: 'Course', flex: 2 },
    { field: 'term', headerName: 'Term', flex: 1 },
    { field: 'grade', headerName: 'Grade', flex: 1 },
];


export default function Education() {


    return (
        <div className="min-h-screen bg-white text-black pt-24 px-6">
            <motion.div
                initial={ { opacity: 0, y: 20 } }
                animate={ { opacity: 1, y: 0 } }
                transition={ { duration: 0.7 } }
                className="max-w-4xl mx-auto"
            >
                <section>
                    <h2 className="text-2xl font-semibold mb-3">College Coursework</h2>
                    <p className="text-gray-500 mb-4">Here are some key computer science courses I've completed:</p>
                    <div style={ { height: 300, width: '100%' } }>
                        <AgGridReact
                            theme={ themeBalham }
                            rowData={ coursework }
                            columnDefs={ columns }
                            domLayout="autoHeight"
                            onGridReady={ (params) => {
                                console.log('AG Grid is ready:', params.api);
                            } }
                        />
                    </div>
                </section>
            </motion.div>
        </div>
    );
}
