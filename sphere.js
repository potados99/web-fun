function drawSphere(ctx, x, y, z, radius) {
    // TODO

    /**
     * 주어진 위치(x, y, z)와 반지름을 가지고 구의 좌표쌍(x, y, z)들을 계산하여 반환합니다.
     * @param {*} param0 
     * @returns [{x, y, z}] 죄표쌍들.
     */
    function inflateSphere({position/**xyz*/, radius}) {
        const points = [];
    
        // TODO 겹겹이 쌓인 원 둘레 좌표들을 쌓습니다.
        // 원점이 (x0, y0)이고 반지름이 r0인 부분 원에서 각 theta에 대한 (x, y) 좌표는 
        // (r0*cos(theta), r0*sin(theta))로 정의됩니다.
        // 이때 부분 원의 반지름은 위도 theta에 대해 r*cos(theta)로 정의됩니다.
    
        return points;
    }
    
    /**
     * 주어진 좌표쌍(x, y, z)들과 카메라 위치(x, y, z)를 가지고, 
     * 카메라 위치로부터 파생된 2차원 평면에 좌표쌍들을 투영한 좌표쌍(x, y)들을 계산하여 반환합니다.
     * @param {*} param0 
     * @returns [(x, y)] 좌표쌍들.
     */
    function project2d({points/*xyz*/, cameraPosition/*xyz*/ }) {
        const projectedPoints = [];
    
        // TODO 주어진 카메라 좌표(x, y, z)에서 바라본 구의 좌표들(x, y, z)을 2차원 평면(캔버스)에 투영합니다.
        // 이때 평면은 카메라와 수직이며 카메라와 상수 거리(초점거리?)를 가지는 것으로 합니다.

        return projectedPoints;
    }
}

