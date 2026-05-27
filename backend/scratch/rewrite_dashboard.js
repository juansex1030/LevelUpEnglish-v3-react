const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', '..', 'admin-panel', 'src', 'pages', 'AdminPanel.jsx');
const destPath = path.join(__dirname, '..', '..', 'admin-panel', 'src', 'components', 'tabs', 'DashboardTab.jsx');

const code = fs.readFileSync(srcPath, 'utf8');

// Extract imports
let newCode = `import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import apiClient from '../../api/apiClient';
import { useAuth } from '../../context/AuthContext';

const DashboardTab = ({ isDarkMode }) => {
    const { user } = useAuth();
`;

// Extract states
const statesRegex = /(const \[stats.*?\] = useState[\s\S]*?)const \[logs/m;
const statesMatch = code.match(statesRegex);
if(statesMatch) {
    newCode += '    const [activeTab, setActiveTab] = useState("dashboard");\n'; // not really needed but safe
    newCode += '    const [userFilter, setUserFilter] = useState("all");\n';
    newCode += '    const [userSearchTerm, setUserSearchTerm] = useState("");\n';
    newCode += '    ' + statesMatch[1] + '\n';
}

const memModalRegex = /(const \[membershipModal.*?\] = useState[\s\S]*?\n    \}\);)/m;
const memMatch = code.match(memModalRegex);
if(memMatch) {
    newCode += '    ' + memMatch[1] + '\n';
}

// Extract loadDashboard
const loadDashRegex = /(const loadDashboard = async \(\) => \{[\s\S]*?\n    \};)/;
const loadMatch = code.match(loadDashRegex);
if(loadMatch) {
    newCode += '\n    useEffect(() => {\n        let isMounted = true;\n        if (user && user.is_admin) {\n            loadDashboard();\n        }\n        return () => { isMounted = false; };\n    }, [user]);\n\n';
    newCode += '    ' + loadMatch[1] + '\n';
}

// Extract helpers and handlers
const timeAgoRegex = /(const timeAgo =[\s\S]*?\n    \};)/;
const timeAgoMatch = code.match(timeAgoRegex);
if(timeAgoMatch) newCode += '\n    ' + timeAgoMatch[1] + '\n';

const roleRegex = /(const handleToggleRole = async [\s\S]*?\n    \};)/;
const roleMatch = code.match(roleRegex);
if(roleMatch) newCode += '\n    ' + roleMatch[1] + '\n';

const openMemRegex = /(const openMembershipModal =[\s\S]*?\n    \};)/;
if(code.match(openMemRegex)) newCode += '\n    ' + code.match(openMemRegex)[1] + '\n';

const closeMemRegex = /(const closeMembershipModal =[\s\S]*?\n    \};)/;
if(code.match(closeMemRegex)) newCode += '\n    ' + code.match(closeMemRegex)[1] + '\n';

const applyMemRegex = /(const handleApplyExtension = async [\s\S]*?\n    \};)/;
if(code.match(applyMemRegex)) newCode += '\n    ' + code.match(applyMemRegex)[1] + '\n';

const viewProgRegex = /(const handleViewProgress = async [\s\S]*?\n    \};)/;
if(code.match(viewProgRegex)) newCode += '\n    ' + code.match(viewProgRegex)[1] + '\n';

const resetProgRegex = /(const handleResetProgress = async [\s\S]*?\n    \};)/;
if(code.match(resetProgRegex)) newCode += '\n    ' + code.match(resetProgRegex)[1] + '\n';

const revokeRegex = /(const handleRevokeFromModal = async [\s\S]*?\n    \};)/;
if(code.match(revokeRegex)) newCode += '\n    ' + code.match(revokeRegex)[1] + '\n';

const delUserRegex = /(const handleDeleteUser = async [\s\S]*?\n    \};)/;
if(code.match(delUserRegex)) newCode += '\n    ' + code.match(delUserRegex)[1] + '\n';

// Extract Dashboard JSX
const dashJsxRegex = /(\{\/\* ========== TAB: DASHBOARD ========== \*\/\}[\s\S]*?)(\{\/\* ========== TAB: SUPPORT INBOX ========== \*\/\}|{activeTab === 'inbox')/;
const dashJsxMatch = code.match(dashJsxRegex);

// Extract Modals JSX
const modalsRegex = /(\{\/\* MODALES GLOBALES \*\/\}[\s\S]*?)(<\/main>)/;
const modalsMatch = code.match(modalsRegex);

newCode += `
    return (
        <>
            ${dashJsxMatch ? dashJsxMatch[1].replace(/\{activeTab === 'dashboard' && \(\s*<>([\s\S]*?)<\/>\s*\)\}/, '$1') : '<div>Dashboard Content</div>'}
            ${modalsMatch ? modalsMatch[1] : ''}
        </>
    );
};

export default DashboardTab;
`;

fs.writeFileSync(destPath, newCode);
console.log("DashboardTab rewritten successfully.");
