<template>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height: 100vh">
        <ol-view ref="map-root" :center="center" :rotation="rotation" :zoom="zoom"
            :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>

        <ol-vector-layer>
            <ol-source-vector>
                <ol-feature>
                    <ol-geom-point :coordinates="c2"></ol-geom-point>
                    <ol-style>
                        <ol-style-text text="Stilsoft" font="400 18px 'Times new Roman'" textBaseline="bottom" :offset-y="40"></ol-style-text>

                        <ol-style-icon  
                            :src="markerIcon"
                            :opacity="0.8"
                            :scale="1"
                            :offset="[0, 0]"
                        >
                        </ol-style-icon>
                    </ol-style>
                </ol-feature>
            </ol-source-vector>
        </ol-vector-layer>
    </ol-map>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import markerIcon from "../assets/location-pin.png"


let location = [41.931543, 44.988483]
const projection = ref("EPSG:4326")
const zoom = ref(18)
const rotation = ref(0)

const center = ref(location)
const c2 = [41.931543, 44.988483]
</script>