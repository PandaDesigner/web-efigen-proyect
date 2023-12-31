import { v4 as uuid } from 'uuid';


export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(JSON.parse(blocksJSON))

    const assignIds = (b) => {
        b.array.forEach(block => {
            block.id = uuid();
            if (block.innerBlocks?.length) {
                assignIds(block.innerBlocks)
            }
        });
    }

}
