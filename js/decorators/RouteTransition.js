export const RouteTransition = (options = {"animation": "fade", "duration": 1000, "delay": 0}) => (TargetComponent) => {
    class EnhanceComponent {
        constructor() {

        }

        render() {
            return true;
        };
    }

    return EnhanceComponent;
};

