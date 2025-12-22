import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { FaGitAlt, FaCloud, FaDocker } from 'react-icons/fa';
import { SiGooglecloud, SiJenkins } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Panel, Handle, Position } from 'reactflow';

import 'reactflow/dist/style.css'; // Import React Flow styles

// Initial nodes for the CI/CD pipeline
const initialNodes = [
    { id: '0', position: { x: 200, y: 100 }, data: { label: 'Developer Push', icon: FaGitAlt, color: 'text-red-400', xPos: 200 }, type: 'custom' },
    { id: '1', position: { x: 712, y: 350 }, data: { label: 'Code Review / Merge', icon: FiArrowRight, color: 'text-gray-400', xPos: 712 }, type: 'custom' },
    { id: '2', position: { x: 200, y: 600 }, data: { label: 'CI Trigger', icon: SiJenkins, color: 'text-blue-400', xPos: 200 }, type: 'custom' },
    { id: '3', position: { x: 712, y: 850 }, data: { label: 'Build & Test', icon: FaDocker, color: 'text-sky-400', xPos: 712 }, type: 'custom' },
    { id: '4', position: { x: 200, y: 1100 }, data: { label: 'Push to Registry', icon: FaCloud, color: 'text-purple-400', xPos: 200 }, type: 'custom' },
    { id: '5', position: { x: 712, y: 1350 }, data: { label: 'CD Deploy (VPS)', icon: SiGooglecloud, color: 'text-green-400', xPos: 712 }, type: 'custom' },
    { id: '6', position: { x: 200, y: 1600 }, data: { label: 'Run on GCP', icon: SiGooglecloud, color: 'text-orange-400', xPos: 200 }, type: 'custom' },
];

// Initial edges for the CI/CD pipeline with animated dashed lines
const initialEdges = [
    { id: 'e0-1', source: '0', target: '1', animated: true, type: 'smoothstep', style: { strokeWidth: 3, stroke: '#f97316', strokeDasharray: '10 10' } },
    { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep', style: { strokeWidth: 3, stroke: '#f97316', strokeDasharray: '10 10' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep', style: { strokeWidth: 3, stroke: '#f97316', strokeDasharray: '10 10' } },
    { id: 'e3-4', source: '3', target: '4', animated: true, type: 'smoothstep', style: { strokeWidth: 3, stroke: '#f97316', strokeDasharray: '10 10' } },
    { id: 'e4-5', source: '4', target: '5', animated: true, type: 'smoothstep', style: { strokeWidth: 3, stroke: '#f97316', strokeDasharray: '10 10' } },
    { id: 'e5-6', source: '5', target: '6', animated: true, type: 'smoothstep', style: { strokeWidth: 3, stroke: '#f97316', strokeDasharray: '10 10' } },
];

// Custom Node Component to render the cards (moved outside CiCdGraphic)
const CustomNode = ({ data }) => {
    const getCardClasses = (label) => {
        const baseClasses = "relative p-6 shadow-xl w-60 transition-all duration-300 transform hover:scale-105";
        return `${baseClasses} rounded-lg bg-gray-800 text-white`;
    };

    const getDescription = (label) => {
        switch(label) {
            case 'Developer Push': return "Your code changes are committed and pushed to the Git repository.";
            case 'Code Review / Merge': return "Triggering the CI pipeline and automating code reviews.";
            case 'CI Trigger': return "The CI server builds your application and runs unit/integration tests.";
            case 'Build & Test': return "A Docker image of your application is built and pushed to a container registry.";
            case 'Push to Registry': return "The CD pipeline on your VPS pulls the new Docker image.";
            case 'CD Deploy (VPS)': return "The new Docker container is deployed and started on the VPS, replacing the old one.";
            case 'Run on GCP': return "The application, now running on the VPS, interacts with Google Cloud services.";
            default: return "";
        }
    };

    return (
        <div className={getCardClasses(data.label)}>
            <Handle type="target" position={data.xPos === 200 ? Position.Right : Position.Left} className="w-3 h-3 bg-blue-500" /> {/* Target handle on the appropriate side */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 shadow-lg text-white text-xl">
                <data.icon />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 mt-4 text-center">{data.label}</h3>
            <p className="text-gray-400 text-sm text-center">
                {getDescription(data.label)}
            </p>
            <Handle type="source" position={data.xPos === 200 ? Position.Right : Position.Left} className="w-3 h-3 bg-green-500" /> {/* Source handle on the appropriate side */}
        </div>
    );
};

const CiCdGraphic = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

    return (
        <section className="py-20 sm:py-24 h-[2300px]"> 
            <div className="container px-4 mx-auto max-w-6xl h-full">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        CI/CD Pipeline Workflow
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Step-by-step deployment process to Google Cloud using VPS, Docker, and Git.
                    </p>
                </div>

                <div style={{ width: '100%', height: 'calc(100% - 200px)' , pointerEvents : "none"}}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        nodesDraggable={false}
                        nodesConnectable={false}
                        nodesFocusable={false}
                        zoomOnScroll={false}
                        panOnDrag={false}
                        elementsSelectable={false}
                        zoomOnDoubleClick={false}
                        panOnScroll={false}
                    >
                        <Background variant="dots" gap={12} size={1} />
                    </ReactFlow>
                </div>
            </div>
        </section>
    );
};

export default CiCdGraphic;