import { useEffect, useState } from "react"
import { Modal, ModalBackground } from "../../../components/Modal"
import { PlantingMaterial } from "../../../database/models/planting-material"
import { PlantingForm } from "./PlantingForm"

type CreatePlantingModalProps = {
  plantMaterial?: PlantingMaterial
}
export const CreatePlantingModal = ({ plantMaterial } : CreatePlantingModalProps) => {
  const [visible, setVisible] = useState(!!plantMaterial)

  useEffect(() => {
    setVisible(!!plantMaterial)
  }, [plantMaterial])

  return <Modal visible={visible} transparent>
      <ModalBackground className="flex flex-col justify-end">
        <PlantingForm
          title={plantMaterial?.name}
          onClose={() => setVisible(false)}
        />
      </ModalBackground>
    </Modal>

}
