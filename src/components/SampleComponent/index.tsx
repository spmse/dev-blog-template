interface ISampleComponentProps {};
export const SampleComponent = (props: ISampleComponentProps) => {
    return (
        <>
            <h1>I am a sample component</h1>

            <img src="https://placehold.co/600x400" alt="placeholder" />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <span>sample lorem ipsum</span>
                <span>sample lorem ipsum</span>
                <span>sample lorem ipsum</span>
                <span>sample lorem ipsum</span>
                <span>sample lorem ipsum</span>
            </div>
        </>
    )
};