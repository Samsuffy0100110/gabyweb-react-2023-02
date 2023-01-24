export default function ProjectNew() {
    return (
        <div className='project_new'>
            <h3>Add a new project</h3>
            <form>
                <label htmlFor="project_name">Project Name</label>
                <input type="text" id="project_name" name="project_name" />
                <label htmlFor="project_description">Project Description</label>
                <input type="text" id="project_description" name="project_description" />
                <label htmlFor="project_image">Project Image</label>
                <input type="text" id="project_image" name="project_image" />
                <label htmlFor="project_stack">Project Stack</label>
                <input type="text" id="project_stack" name="project_stack" />
                <label htmlFor="project_link">Project Link</label>
                <input type="text" id="project_link" name="project_link" />
                <label htmlFor="project_date">Project Date</label>
                <input type="text" id="project_date" name="project_date" />
                <button type="submit">Add project</button>
            </form>
        </div>
    );
}