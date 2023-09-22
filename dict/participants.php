<?php include('common/header.php') ?>

  <div class="container">
    <h1>This is participants page.</h1>

    <!-- Button trigger modal -->
    <button 
        type="button" 
        class="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#addModalForm"
        onclick="formClear()">
        Add new participants
    </button>

    <!-- Modal -->
    <div class="modal fade" id="addModalForm" tabindex="-1" aria-labelledby="addModalFormLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addModalFormLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div>
                            <label for="firstname" class="col-form-label">FirstName</label>
                            <input type="text" class="form-control" id="firstname">
                        </div>
                        <div>
                            <label for="Lastname" class="col-form-label">LastName</label>
                            <input type="text" class="form-control" id="lastname">
                        </div>
                        <div>
                            <label for="address" class="col-form-label">Address</label>
                            <input type="text" class="form-control" id="address">
                        </div>
                        <div>
                            <label for="gender" class="col-form-label">Gender</label>
                            <input type="text" class="form-control" id="gender">
                        </div>
                        <div>
                            <label for="agency" class="col-form-label">Agency</label>
                            <input type="text" class="form-control" id="agency">
                        </div>
                        <div>
                            <label for="email" class="col-form-label">Email</label>
                            <input type="text" class="form-control" id="email">
                        </div>
                        <div>
                            <label for="remarks" class="col-form-label">Remarks</label>
                            <input type="text" class="form-control" id="remarks">
                        </div>

                        <input type="hidden" id="id" name="id">
                    </div>
                </div>
                <div class="modal-footer">
                     
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" id="btnSave">Save</button>
                </div>
            </div>
        </div>
    </div>

    <table class="table table-hover" id="participantsList">
      <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Address</th>
            <th scope="col">Gender</th>
            <th scope="col">Agency</th>
            <th scope="col">Email</th>
            <th scope="col">Remarks</th>
            <th scope="col">ACTION</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>

  </table>
  </div>

<?php include('common/footer.php') ?> 