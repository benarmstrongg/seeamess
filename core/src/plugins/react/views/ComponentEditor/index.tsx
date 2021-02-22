import React, { useMemo } from 'react';
import { IEditorView } from '../../../../types/EditorView';
import { FaReact } from 'react-icons/fa';
import { useEditor } from '../../../../context';
import { ReactFunctionComponent } from '../../content-types/FC';
import { EditorArea } from './EditorArea';
import { ComponentInfoPanel } from './ComponentInfoPanel';
import './styles.scss';

export const ReactComponentEditorView: IEditorView = () => {
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