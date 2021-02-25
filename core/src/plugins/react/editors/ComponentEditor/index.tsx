import React, { useMemo } from 'react';
import { IEditor } from '../../../../types/editor';
import { FaReact } from 'react-icons/fa';
import { ReactFunctionComponent } from '../../content-types/FC';
import { EditorArea } from './EditorArea';
import { ComponentInfoPanel } from './ComponentInfoPanel';
import './styles.scss';
import { withContent } from '../../../../hooks';

const ReactComponentEditorView: IEditor = ({ content }) => {
    console.log(content);
    const component = content as any;
    // const ast = content[0] as ReactFunctionComponent;
    // const component = useMemo(() => ast.find({}, ReactFunctionComponent), [ast]);
    return (
        <div className="ReactComponentEditor">
            {/* {!!component ? (
                <>
                    <ComponentInfoPanel component={component} />
                    <EditorArea component={component} />
                </>
            ) : null} */}
        </div>
    );
}

ReactComponentEditorView.button = (
    <>
        <FaReact />
        <>&nbsp;React</>
    </>
);

export default withContent(ReactFunctionComponent, ReactComponentEditorView);