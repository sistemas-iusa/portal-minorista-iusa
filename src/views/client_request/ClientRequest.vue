<template>
  <div class="container-fluid">
    <p></p>
    <h1>Alta Cliente <i class="fas fa-user-plus"></i></h1>
    <p></p>
    <div class="card">
      <div class="card-header" style="text-align: left; font-weight: 700">
        Carga de Información
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Razón Social" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="RFC" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Calle" />
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Número" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Colonia" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input
                class="form-control"
                placeholder="Delegación / Municipio"
              />
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Estado" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="CP" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-phone"></i
              ></span>
              <input class="form-control" placeholder="Teléfono" />
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-user"></i
              ></span>
              <input class="form-control" placeholder="Nombre de Contacto" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-envelope"></i
              ></span>
              <input class="form-control" placeholder="Email" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input
                class="form-control"
                placeholder="Número de Agente de Ventas"
              />
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Oficina de Ventas" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Zona de Ventas" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Código de Ramo" />
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div class="input-group">
              <select
                class="form-select"
                multiple
                aria-label="multiple select example"
              >
                <option selected>Centro de Suministro</option>
                <option value="1">BX00</option>
                <option value="2">BX03</option>
                <option value="3">BX05</option>
                <option value="3">BX08</option>
                <option value="1">BX09</option>
                <option value="2">BX10</option>
                <option value="3">BX16</option>
                <option value="3">BX18</option>
                <option value="2">BX19</option>
                <option value="3">BX21</option>
                <option value="3">BX28</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <input class="form-control" placeholder="Regimén Fiscal" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-credit-card"></i
              ></span>
              <input class="form-control" placeholder="Método de Pago" />
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <span>Uso de CFDI</span> &nbsp;
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light">PDD</button>
              <button type="button" class="btn btn-light">PUE</button>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa fa-dolly-flatbed"></i
              ></span>
              <input class="form-control" placeholder="Zona de Transporte" />
            </div>
          </div>
          <div class="col-md-4">
            <span>IVA</span> &nbsp;
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light">16%</button>
              <button type="button" class="btn btn-light">8%</button>
              <button type="button" class="btn btn-light">0%</button>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <span>Solicitas Línea de Crédito</span> &nbsp;
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light">SÍ</button>
              <button type="button" class="btn btn-light">NO</button>
            </div>
          </div>
          <div class="col-md-4">
            <span>Entregas en Dirección Fiscal</span> &nbsp;
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light">SÍ</button>
              <button type="button" class="btn btn-light">NO</button>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-user"></i
                ></span>
                <input
                  class="form-control"
                  placeholder="Nombre de Representante Legal"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-dollar-sign"></i
                ></span>
                <input
                  class="form-control"
                  placeholder="Línea de Crédito Solicitada"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-dollar-sign"></i
                ></span>
                <input
                  class="form-control"
                  placeholder="Venta Mensuales del Negocio"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <input
                  class="form-control"
                  placeholder="Tamaño del Negocio (m2)"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <input class="form-control" placeholder="Giro del Negocio" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <span>Las Instalaciones Son Propias</span> &nbsp;
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light">SÍ</button>
              <button type="button" class="btn btn-light">NO</button>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <input class="form-control" placeholder="Via de Pago" />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div>
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fa fa-credit-card"></i
                ></span>
                <input
                  class="form-control"
                  placeholder="Sugerencia de Línea de Crédito"
                />
              </div>
            </div>
          </div>
          <p></p>
        </div>
      </div>
    </div>
    <p></p>
    <div class="card">
      <div class="card-header" style="font-weight: 700">
        Carga de Documentación
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Foto 1 (Fachada)</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Foto 1 (Fachada)"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Foto 2 (Interior)</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Foto 2 (Interior)"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Foto 3 (Mostrador/Bodega)</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Foto 3 (Mostrador/Bodega)"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >Constancia de Situación Fiscal no mayor a dos meses</label
              >
              <br />
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Constancia de Situación Fiscal no mayor a dos meses"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >Identificación oficial de persona Fisica o representante legal
                (ambos lados)</label
              >
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Identificación oficial de persona Fisica o representante legal (ambos lados)"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >Comprobante de domicilio dirección fiscal no mayor a dos
                meses</label
              >
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Comprobante de domicilio dirección fiscal no mayor a dos meses"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >En caso de que las entregas sean en domicilio diferente al
                fiscal, comprobante de domicilio no mayor a dos meses</label
              >
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="En caso de que las entregas sean en domicilio diferente al fiscal, comprobante de domicilio no mayor a dos meses"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Aviso de Protección de datos</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Aviso de Protección de datos"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Formato de Buró de Crédito</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Formato de Buró de Crédito"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >En caso de que las entregas sean en un domicilio distinto al
                Fiscal, formato de Alta de Apertura ante SHCP</label
              >
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="En caso de que las entregas sean en un domicilio distinto al Fiscal, formato de Alta de Apertura ante SHCP"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Acta constitutiva</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Acta constitutiva"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >En caso de que exista un poder notarial para ser el
                representante legal de la persona moral o Física</label
              >
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="En caso de que exista un poder notarial para ser el representante legal de la persona moral o Física"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Pagaré</label>
              <div class="input-group">
                <input type="file" class="form-control" placeholder="Pagaré" />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Comprobante de domicilio de Aval</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Comprobante de domicilio de Aval"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Identificación oficial de Aval (ambos lados)</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Identificación oficial de Aval (ambos lados)"
                />
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div class="row">
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for=""
                >Referencias Bancarias (carpatula de estado de cuenta)</label
              >
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Referencias Bancarias (carpatula de estado de cuenta)"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div style="text-align: left; font-weight: 700">
              <label for="">Políticas de Crédito Nacionales</label>
              <div class="input-group">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Políticas de Crédito Nacionales"
                />
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
        </div>
        <p></p>
      </div>
    </div>
    <p></p>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="d-grid gap-2">
          <button class="btn btn-success">Send</button>
        </div>
      </div>
    </div>
    <p></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ClientRequest",
  components: {},
};
</script>
