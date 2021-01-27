import React, { FC } from "react";
import './styles.scss';
import { FilesView } from "../../views/explorer/FilesView";


export const ExplorerSection: FC = () => {
    return (
        <div className="ExplorerSection">
            <>explorer</>
            <FilesView />
        </div>
    );
}