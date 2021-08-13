import React, { FC, useState } from "react";
import { useTunnel } from "../../hooks";
import { IFile, IProject } from "../../types";
import { ProjectContext } from "./ProjectContext";
import { createMonaco, createProgram } from './util';


export const ProjectProvider: FC = ({ children }) => {
    const tunnel = useTunnel();
    const [project, setProject] = useState<IProject>();

    tunnel.once('project.init', async (config: IProject['config'], _files: { [key: string]: IFile }) => {
        const files = new Map(Object.entries(_files).filter(([name]) => !name.includes('node_modules')));
        const program = createProgram(config, files);
        const monaco = await createMonaco();
        setProject({ config, files, program, monaco });
    });

    if (!project) {
        return (<div>Loading project configuration...</div>);
    }

    return (
        <ProjectContext.Provider value={project}>
            {children}
        </ProjectContext.Provider>
    );
}

