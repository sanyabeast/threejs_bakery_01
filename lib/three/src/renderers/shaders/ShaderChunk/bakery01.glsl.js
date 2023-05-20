export default /* glsl */`
#if defined( USE_COLOR )

    //totalEmissiveRadiance.rgb += (diffuseColor.rgb * length(vColor.rgb)) * normalize(vColor.rgb);
    totalEmissiveRadiance.rgb += vColor.rgb;

#endif
`;
