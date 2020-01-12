import { mapDispatchToProps } from '../index'

describe('mapDispatchToProps', () => {

    it('should dispatch updateVote when called', () => {
        const result = mapDispatchToProps;
        const dumLink = {
            createdAt: new Date(),
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: new Date(),
        };
        result.updateVote(dumLink);
    });

    it('should dispatch deleteLink when called', () => {
        const result = mapDispatchToProps;

        const dumLink = {
            createdAt: new Date(),
            id: 'id',
            link: 'link',
            name: 'name',
            point: 0,
            updatedAt: new Date(),
        };
        result.deleteLink(dumLink);
    });
});