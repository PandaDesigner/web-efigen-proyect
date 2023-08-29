
export const BlockRenderer = ({ blocks }) => {

    return blocks.map(block => {
        switch (block.name) {
            case "core/cover": {
                return <h2>{block.name}</h2>
            }
            default:
                return null;
        }
    })

};