import React from 'react';
import { IEditor } from '../../../../types/editor';
import { FaReact } from 'react-icons/fa';
import { ReactFunctionComponent } from '../../content-types/FC';
// import { EditorArea } from './EditorArea';
// import { ComponentInfoPanel } from './ComponentInfoPanel';
import { useContent } from '../../../../hooks';
import './styles.scss';

export const ReactComponentEditor: IEditor = () => {
    const components = useContent(ReactFunctionComponent);
    console.log(components);
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

ReactComponentEditor.button = (
    <>
        <FaReact />
        <>&nbsp;React</>
    </>
);

ReactComponentEditor.acceptedContentTypes = [];