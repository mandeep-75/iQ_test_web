import { useState } from 'react';
import { Link } from 'react-router';
import { examDetails } from './examData';

export function Exams() {
    const [selectedExam, setSelectedExam] = useState(null);

    const handleBack = () => setSelectedExam(null);

    return (
        <div className="min-h-screen bg-secondary text-gray-100 p-6">
            {selectedExam ? (
                <>
                    <button
                        onClick={handleBack}
                        className="mb-6 px-4 py-2 bg-primary hover:bg-neutral rounded shadow text-white"
                    >
                        ← Back to Exams
                    </button>

                    <div className=" bg-neutral  p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-white mb-2">{selectedExam}</h2>
                        <p className="text-gray-300 mb-4">{examDetails[selectedExam].description}</p>

                        <h3 className="text-xl font-semibold text-white mb-1">History</h3>
                        <p className="text-gray-400 mb-4">{examDetails[selectedExam].history}</p>

                        <h3 className="text-xl font-semibold text-white mb-2">Recommended Tests</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            {examDetails[selectedExam].recommendedTests.map((test, idx) => (
                                <Link
                                    key={idx}
                                    to={`/tests/${test.route}`}
                                    className="block p-4 bg-secondary hover:bg-primary rounded-lg shadow transition-transform hover:scale-[1.02]"
                                >
                                    <h4 className="text-lg font-bold text-white">{test.title}</h4>
                                    <p className="text-sm text-gray-300">{test.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="text-4xl font-bold text-white mb-6">Explore Exams</h1>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Object.keys(examDetails).map((exam, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedExam(exam)}
                                className="text-left w-full p-6 bg-neutral hover:bg-primary rounded-lg shadow-xl transition-all"
                            >
                                <h2 className="text-2xl font-semibold text-white">{exam}</h2>
                                <p className="text-sm text-gray-300 mt-2">
                                    {examDetails[exam].description.slice(0, 100)}...
                                </p>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
