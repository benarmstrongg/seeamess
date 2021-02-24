import React, { useMemo } from 'react';
import { IEditor } from '../../../../types/editor';
import { FaReact } from 'react-icons/fa';
import { useEditor } from '../../../../hooks';
import { ReactFunctionComponent } from '../../content-types/FC';
import { EditorArea } from './EditorArea';
import { ComponentInfoPanel } from './ComponentInfoPanel';
import './styles.scss';

export const ReactComponentEditorView: IEditor = () => {
    const { tsHelper } = useEditor();
    const ast = useMemo(() => tsHelper.getAST(), [tsHelper]);
    const component = useMemo(() => ast.find({}, ReactFunctionComponent), [ast]);
    return (
        <div className="ReactComponentEditor">
            {!!component ? (
                <>
                    <ComponentInfoPanel component={component} />
                    <EditorArea component={component} />
                </>
            ) : null}
        </div>
    );
}

ReactComponentEditorView.button = (
    <>
        <FaReact />
        <>&nbsp;React</>
    </>
);